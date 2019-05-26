"use strict";

require('dotenv').config();
const pg = require ("pg")
const client = new pg.Client({
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  db       : process.env.DB_NAME,
  host     : process.env.DB_HOST,
})
client.connect((err)=>{
  if (err) {
    return console.error("Connection Error", err);
  }
})
 
const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.

// Log knex SQL queries to STDOUT as well

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));

const db = []

app.use(express.static("public"));

// Mount all resource routes
app.use("/list", usersRoutes(knex));

// Home page
// app.get("/", (req, res) => {
//   res.redirect("/");
// });

// app.post("/",(req,res)=>{
//   // get user input
//   const title = req.body.text;

  // create a todo item
//   const newTodo = {
//     title,
//     type: "movies",
//     status: 'active',
//     createdAt: Date.now()
//   }
  
//   // add to database
//   db.push(newTodo);

//   res.send(newTodo);
// })

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
