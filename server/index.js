require('dotenv/config');
const express = require('express');
const pg = require('pg');
const uploadsMiddleware = require('./uploads-middleware');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const app = express();
const jsonMiddleware = express.json();
const ClientError = require('./client-error');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(jsonMiddleware);
app.use(staticMiddleware);

app.post('/api/userProfiles', uploadsMiddleware, (req, res, next) => {
  const userId = 1;
  const { fullName, birthday = 'yes', sex = 'yes', displaySex = true, occupation = 'yes', fact = 'yes', profilePic = 'yes' } = req.body;
  if (!profilePic) {
    throw new ClientError(400, 'image required');
  }
  const sql = `
    insert into "userProfiles" ("fullName", "birthday", "sex", "displaySex", "occupation", "fact", "profilePic", "userId")
    values ($1, $2, $3, $4, $5, $6, $7, $8)
    returning *
  `;
  const params = [fullName, birthday, sex, displaySex, occupation, fact, profilePic, userId];
  db.query(sql, params)
    .then(result => {
      const [userProfiles] = result.rows;
      res.status(201).json(userProfiles);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
