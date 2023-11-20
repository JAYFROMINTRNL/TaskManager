const express = require('express');
const app = express();
const {mongoose} = require('./db/mongoose'); /**const {mongoose} = require('./db/mongoose'); */

const bodyParser = require('body-parser');

// Load in mongoose models
const { List, Task } = require('./db/models');

// Load MiddleWare
app.use(bodyParser.json());

/* ROUTE HANDLERS */ 

/* LIST ROUTES */

/**
 * GET /lists
 * purpose: gets all of the lists
 */
app.get('/lists', (req, res) => {
    // res.send("Hello World!") /* TEST SEND */
    // We want to return an array of all the lists in the database


    List.find({}).then((lists) => {
        res.send(lists);
    });
    
})

/**
 * POST /lists
 * purpose: create a list
 */
app.post('/lists', (req, res) => {
    // We want to create a new list and return the new list document back to the user which includes the id
    // The list info is passed in json body
    let title = req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc) => {
        // the full list document is returned including the id
        res.send(listDoc);
    })
})

/**
 * PATCH /lists/:id
 * purpose: update specified list
 */
app.patch('/lists/:id', (req, res) => {
    // We want to update the specified listwith the new values specified in the json body of the request
})

/**
 * DELETE /listsx/:id
 * purpose: delete a specified list
 */
app.delete('/lists/:id', (req, res) => {
    // We want to delete a specific list item (document with id in the URL)
})


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})