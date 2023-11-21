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


// GETS ALL TASKS IN A SPECIFIC LIST
app.get('/lists/:listId/tasks', (req, res) => {
    // RETURNS ALL TASKS THAT BELONG TO A CERTAIN LIST BY ID
    Task.find({
        _listId: req.params.listId
    }).then((tasks) => {
        res.send(tasks);
    })
})


// MAKES NEW TASK IN A LIST
app.post('/lists/:listId/tasks', (req, res) => {
    // MAKES A NEW TASK IN A CERTAIN LIST BY LIST ID
    let newTask = new Task({
        title: req.body.title,
        _listId: req.params.listId
    });
    newTask.save().then((newTaskDoc) => {
        res.send(newTaskDoc);
    })
});

// UPDATES A TASK IN A LIST 
app.patch('/lists/:listId/tasks/:taskId', (req, res) => {
    // THIS UPDATES A SPECIFIC TASK ITEM IN A LIST BY USING BOTH IDS
    Task.findOneAndUpdate({
        _id: req.params.taskId,
        _listId: req.params.listId
    },  {
        $set: req.body
        }
    ).then(() => {
        res.sendStatus(200);
    });

})

// DELETES A TASK IN A SPECIFIC LIST
app.delete('/lists/:listId/tasks/:taskId', (req, res) => {
    Task.findOneAndDelete({
        _id: req.params.taskId,
        _listId: req.params.listId
    }).then((removedTaskDoc) => {
        res.send(removedTaskDoc)
    })
});


app.listen(3000, () => {
    console.log("server is listening on port 3000 :)");
})