// const postgres=require("postgres");
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host:"localhost",
  database:"StayNest",    //practice database for login signup normal user
  password:"Gaurav01",
  port: 5432,
});
pool.connect()
  .then(() => console.log("PostgreSQL Connected"))
  .catch(err => console.log(err));


  module.exports = pool; 