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

/* Fetch GET Requests */

app.get('/api/users', (req, res, next) => {
  const sql = `
  select "userId"
    from "users"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/matchProfiles', (req, res, next) => {
  const sql = `
    select "u".*,
        "image",
        "cityName"
      from "userProfiles" as "u"
      join "images" using ("profileId")
      join "locations" using ("profileId")
    order by "profileId" desc
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/onlyProfiles', (req, res, next) => {
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

app.get('/api/matchedlist', (req, res, next) => {
  const sql = `
    select "u".*,
        "image",
        "cityName"
      from "userProfiles" as "u"
      join "images" using ("profileId")
      join "locations" using ("profileId")
    order by "profileId" desc
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/notMatchedYet', (req, res, next) => {
  const sql = `
    SELECT "u".*,
        "image",
        "cityName"
  from "userProfiles" as "u"
  join "images" using ("profileId")
  join "locations" using ("profileId")
LEFT JOIN "matches" ON "acceptedProfileId" = "profileId"
WHERE "acceptedProfileId" IS NULL
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

/* Fetch GET specific profiles */

app.get('/api/matchedlist/:profileId', (req, res, next) => {
  const profileId = Number(req.params.profileId);
  if (!profileId) {
    throw new ClientError(400, 'ProfileId does not exist');
  }
  if (!Number.isInteger(profileId) || profileId < 1) {
    throw new ClientError(400, 'profileId must be a positive integer');
  }
  const sql = `
    select   "u".*,
          "image",
          "cityName",
          "lat",
          "lng",
          "matchId"
      from "userProfiles" as "u"
      join "images" using ("profileId")
      join "locations" using ("profileId")
      join "matches" as "m" using ("userId")
      where "requestedProfileId"= $1 and "isMatched" = true and "profileId" != $2
      order by "profileId" desc
  `;
  const params = [profileId, profileId];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/matchProfiles/:profileId', (req, res, next) => {
  const profileId = Number(req.params.profileId);
  if (!profileId) {
    throw new ClientError(400, 'ProfileId does not exist');
  }
  if (!Number.isInteger(profileId) || profileId < 1) {
    throw new ClientError(400, 'profileId must be a positive integer');
  }
  const sql = `
    select "u".*,
          "image",
          "cityName",
          "lat",
          "lng"
      from "userProfiles" as "u"
      join "images" using ("profileId")
      join "locations" using ("profileId")
     where "profileId" = $1
  `;
  const params = [profileId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find profile with prodfileId ${profileId}`);
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.get('/api/edit/:profileId', (req, res, next) => {
  const profileId = Number(req.params.profileId);
  if (!profileId) {
    throw new ClientError(400, 'ProfileId does not exist');
  }
  if (!Number.isInteger(profileId) || profileId < 1) {
    throw new ClientError(400, 'profiletId must be a positive integer');
  }
  const sql = `
    select "u".*,
          "image",
          "cityName",
          "lat",
          "lng"
      from "userProfiles" as "u"
      join "images" using ("profileId")
      join "locations" using ("profileId")
     where "profileId" = $1
  `;
  const params = [profileId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find profile with prodfileId ${profileId}`);
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.get('/api/matchlist/:profileId', (req, res, next) => {
  const profileId = Number(req.params.profileId);
  if (!profileId) {
    throw new ClientError(400, 'ProfileId does not exist');
  }
  if (!Number.isInteger(profileId) || profileId < 1) {
    throw new ClientError(400, 'profiletId must be a positive integer');
  }
  const sql = `
    select "u".*,
          "image",
          "cityName",
          "lat",
          "lng"
      from "userProfiles" as "u"
      join "images" using ("profileId")
      join "locations" using ("profileId")
     where "profileId" = $1
  `;
  const params = [profileId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find profile with prodfileId ${profileId}`);
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

/* Post Route Requests */

app.post('/api/matchProfiles', (req, res, next) => {
  const { fullName, birthday = '12/03/1994', sex = 'He-Man', displaySex = true, occupation = 'Funemployed', fact = 'I sleep for dinner', userId } = req.body;
  if (!birthday) {
    throw new ClientError(400, 'Age is required');
  }
  const sql = `
    insert into "userProfiles" ("fullName", "birthday", "sex", "displaySex", "occupation", "fact", "userId")

    values ($1, $2, $3, $4, $5, $6, $7)
    returning *
  `;
  const params = [fullName, birthday, sex, displaySex, occupation, fact, userId];
  db.query(sql, params)
    .then(result => {
      const [userProfiles] = result.rows;
      res.status(201).json(userProfiles);
    })
    .catch(err => next(err));
});

app.post('/api/images', uploadsMiddleware, (req, res, next) => {
  let { profileId } = req.body;
  profileId = Number(profileId);
  const url = `/images/${req.file.filename}`;

  if (!Number.isInteger(profileId) || profileId < 1) {
    throw new ClientError(400, 'profileId must be a valid interger');
  }

  if (!profileId) {
    throw new ClientError(400, 'profileId does not exist');
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
  const { cityName, lat, lng, profileId } = req.body;
  parseInt(profileId);
  if (!lat || !lng) {
    throw new ClientError(400, 'Location required');
  }
  if (!Number.isInteger(profileId) || profileId < 1) {
    throw new ClientError(400, 'profileId does not Exist');
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

app.post('/api/matches', (req, res, next) => {
  const { isMatched, requestedProfileId, acceptedProfileId, userId } = req.body;
  parseInt(requestedProfileId);
  parseInt(acceptedProfileId);
  parseInt(userId);

  if (!Number.isInteger(userId) || userId < 1) {
    throw new ClientError(400, 'UserId must be a valid interger');
  }
  if (!Number.isInteger(requestedProfileId) || requestedProfileId < 1 || !Number.isInteger(acceptedProfileId) || acceptedProfileId < 1) {
    throw new ClientError(400, 'ProfileId must be a valid interger');
  }
  if (!requestedProfileId || !acceptedProfileId) {
    throw new ClientError(400, 'Valid matches required');
  }
  const sql = `
    insert into "matches" ("isMatched", "requestedProfileId", "acceptedProfileId", "userId")
    values ($1, $2, $3, $4)
    returning *
  `;
  const params = [isMatched, requestedProfileId, acceptedProfileId, userId];
  db.query(sql, params)
    .then(result => {
      const [matches] = result.rows;
      res.status(201).json(matches);
    })
    .catch(err => next(err));
});

app.post('/api/users', (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!email.includes('@')) {
    throw new ClientError(400, 'Please use a valid email address');
  }
  const sql = `
    insert into "users" ("firstName", "lastName", "email", "password")
    values ($1, $2, $3, $4)
    returning *
  `;
  const params = [firstName, lastName, email, password];
  db.query(sql, params)
    .then(result => {
      const [results] = result.rows;
      res.json({ results });
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
