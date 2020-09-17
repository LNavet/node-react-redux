const dotenv = require("dotenv").config();
module.exports ={
  "development": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT,
    "port": process.env.DATABASE_PORT
  },
  "test": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT,
    "port": process.env.DATABASE_PORT
  },
  "production": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT,
    "port": process.env.DATABASE_PORT
  }
}
/**
 * "username": "postgres",
    "password": "postgres",
    "database": "postgres",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": "5433"
 */