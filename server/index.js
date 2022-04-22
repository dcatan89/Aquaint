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

app.get('/api/userProfiles', (req, res, next) => {
  const sql = `
    select *
      from "userProfiles"
     order by "profileId" desc
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/images', (req, res, next) => {
  const sql = `
    select *
      from "images"
      order by "imageId" desc
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/userProfiles', (req, res, next) => {
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

app.post('/api/images', uploadsMiddleware, (req, res, next) => {
  const profileId = 1;
  const url = `/images/${req.file.filename}`;
  if (!Number.isInteger(profileId) || profileId < 1) {
    throw new ClientError(400, 'profileId does not Exist');
  }
  const sql = `
    insert into "images" ("image", "profileId")
    values ($1, $2)
    returning *
  `;
  const params = [url, profileId];
  db.query(sql, params)
    .then(result => {
      const [results] = result.rows;
      res.json({ results });
    })
    .catch(err => next(err));
});

app.post('/api/locations', (req, res, next) => {
  const profileId = 1;
  const { cityName, lat, lng } = req.body;
  if (!lat || !lng) {
    throw new ClientError(400, 'Location required');
  }
  const sql = `
    insert into "locations" ("cityName", "lat", "lng", "profileId")
    values ($1, $2, $3, $4)
    returning *
  `;
  const params = [cityName, lat, lng, profileId];
  db.query(sql, params)
    .then(result => {
      const [location] = result.rows;
      res.status(201).json(location);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
