"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // router.get("/", (req, res) => {
  //   knex
  //     .select("*")
  //     .from("users")
  //     .then((results) => {
  //       res.json(results);
  //   });
  // });
  
  router.get("/",(req,res) =>{
    console.log('GET MOVIES')
    knex
      .select("title")
      .from("chores")
      .where("category", "movie")
      .then(results => {
        console.log( "THIS IS THE REULTS FROM BACKEND", results)
        res.json(results);    
        })
      // res.send (client)
  }); 

  return router;
}
