const postgres=require("postgres");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host:"localhost",
  database:"Practice",
  password:"Gaurav01",
  port: 5432,
});
pool.connect()
  .then(() => console.log("PostgreSQL Connected"))
  .catch(err => console.log(err));
