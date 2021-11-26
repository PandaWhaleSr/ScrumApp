const { Pool } = require("pg");

const PG_URI =
  "postgres://thygucvg:Y8cItGpd4ot8HQihS3B6EiNN1BY7J4Qa@kashin.db.elephantsql.com/thygucvg";

const pool = new Pool({
  connectionString: PG_URI,
});

//bcrypt --> does this need to be here as it does when we create a Mongoose schema?
const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcrypt");

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
