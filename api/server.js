// importing Express
const express = require('express');
const Subjects = require('../models/dbhelpers');
const server = express();
// allows the server to parse json objects
server.use(express.json());
// ShortId creates amazingly short non-sequential url-friendly unique ids
const shortid = require('shortid');

// set port



// get request
server.get("/", (req, res) => {
    res.json({message:"main page"});

});

//post request
server.post("/api/subjects", (req, res) => {
    
    
    // add a new id to the subjec info
    Subjects.add(req.body)
    .then(subject => { res.status(200).json(subject); 
 })
    .catch(error => {res.status(500).json({message:"Cannot Add Subject"})
 })
});


//Get request from subjects
server.get("/api/subjects", (req, res) => {
    Subjects.find()
    .then(subjects => {
        res.status(200).json(subjects)
    })
    .catch(error => {res.status(500).json({message:"Cannot Get Subject"})
 })
});


// Get request from specific ID

server.get("/api/subjects/:id", (req, res) => {
    // this pulls the value of id from the req.params object
    const {id} = req.params;

  Subjects.findById(id)
  .then(subject => {
      if (subject){
      res.status(200).json(subject)
      }
      else{
          res.status(404).json({message:"Subject Not Found"})
      }
  })
  .catch(error => {
      res.status(500).json({message:" Cannot Get Specific Subject"})
  });
});


//DELETE request for a specific entry based on ID
server.delete("/api/subjects/:id", (req, res) => {
    // this pulls the value of id from the req.params object
    const {id} = req.params;

  Subjects.remove(id)
  .then(count => {
      if (count > 0){
      res.status(200).json({message:"DELETED"});
      }
      else{
          res.status(404).json({message:"UNABLE TO DELETE"})
      }
  })
  .catch(error => {
      res.status(500).json({message:" Unable to perform operation"})
  });
});
// experts server
module.exports = server;