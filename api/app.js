const express = require('express');
const app = express();


const {mongoose} = require('./db/mongoose')

const bodyParser = require('body-parser');

// LOAD IN THE MONGOOSE MODELS
// const { List } = require('./db/models/list.model');
// const { Task } = require('./db/models/task.model');
const { List, Task } = require('./db/models');

// LOAD MIDDDLEWARE
app.use(bodyParser.json());

// GET ALL LISTS
app.get('/lists', (req, res) => {
    // res.send('heyyy');
    //  THIS SENDS AN ARRAY OF ALL THE LISTS IN THE DATABASE
    List.find({}).then((lists) => {
        res.send(lists);
    });

})


// CREATES NEW LIST
app.post('/lists', (req, res) => {
    // THIS CREATES A NEW LIST AND RETURNS THE NEW LIST DOCUMENT BACK TO THE USER
    // THE LIST INFORMATION IS PASSED VIA JSON REQUEST BODY
    let title = req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc) => {
        // returns the full list document with id
        res.send(listDoc);
    })

});

// UPDATES A LIST
app.patch('/lists/:id', (req, res) => {
    // THIS UPDATES A LIST WITH ID AND NEW DATA IN THE JSON=
    List.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
});


// DELETES LIST
app.delete('/lists/:id', (req, res) => {
    // THIS DELETES A SPECIFIED LIST
    List.findOneAndDelete({
        _id: req.params.id
    }).then((removedListDoc) => {
        res.send(removedListDoc);
    })
});

app.listen(3000, () => {
    console.log("server is listening on port 3000 :)");
})