//import express 
const express = require("express");

//create an express router(not an entire server again)
const router = express.Router();

//actual routing goes here
//GET 
router.get("/:id?", (req, res) => {
    //Grab the incoming request parameter called id
    const id = req.params.id;

    let fakeData;
    //simulating grabbing the correct data from a database
    if (id) {
    fakeData = {
        id,
        name : "Seinfeld",
        friends: ["Kramer", "Elaine", "George"]
    }
    } else {
        fakeData = {
            characters: ["Kramer", "Elaine", "George", "Jerry"]

    }
    }

    //END the request/response cycle by sending back the fake user
    // data as JSON
    res.json(fakeData);
});


// POST 

router.post("/", (req, res) => {
    //grab the incoming data off of the req's body
    //REMINDER: req.body is accessible due to our previously setup
    // middleware
    const newData = req.body;

    console.log(`adding ${newData} into DB`);
    res.end ("updated DB with the new data");
});

//PUT
router.put("/update/:id", (req, res) => {
    //Grab the incoming data off of the request body
    const incomingData = req.body;
    // Grab the id which speicifies what data needs changing
    const id = req.params.id;

    //update the data using the provided id and the 
    console.log(`Changing date with id of ${id} to now be ${incomingData}`);

   //respond to the client to let them know how it went 
   res.end("Updated DB with the changed data"); 
});

//DELETE 
//Whenever you're even dreaming of deleting data, it better be 
//only one specific line at a time. AKA you need an Id
router.delete("//:id", (req, res) => {
    //grab the id from the request paramters
    const id = req.params.id

    //tell the DB to delete the row that matches this id
    console.log(`Deleting dat that matches the id:${id}`);

    //respond to the client to let them know how it went
    res.end(`Deleted the row with id of ${id}`);
});



//export this router, so that it can be used in other file(s)
module.exports = router;