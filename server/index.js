require('dotenv/config');
const express = require('express');
const pg = require('pg');
const uploadsMiddleware = require('./uploads-middleware');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const app = express();
const jsonMiddleware = express.json();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(jsonMiddleware);
app.use(staticMiddleware);

app.post('/api/profiles', uploadsMiddleware, (req, res, next) => {
  const { task, isCompleted = false } = req.body;
  if (!task || typeof isCompleted !== 'boolean') {
    res.status(400).json({
      error: 'task (string) and isCompleted (boolean) are required fields'
    });
    return;
  }
  const sql = `
    insert into "todos" ("task", "isCompleted")
    values ($1, $2)
    returning *
  `;
  const params = [task, isCompleted];
  db.query(sql, params)
    .then(result => {
      const [todo] = result.rows;
      res.status(201).json(todo);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
