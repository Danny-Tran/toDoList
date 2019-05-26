"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/",(req,res) =>{
      knex('chores')
      .select('title')
      .where({ category: 'restaurant' })
      .then(results => {
        
        res.json(results);    
        })
      
  }); 

  

  return router;
}
