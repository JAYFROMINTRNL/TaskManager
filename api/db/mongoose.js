// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// fixes deprec warnings
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);


// mongoose.connect("mongodb://localhost:27017/newdbthing");

// { useNewUrlParser: true }

mongoose.connect('mongodb://localhost:27017/TaskManager').then(() => {
    console.log("Connected to MongoDB successfully  :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
})



module.exports = {
    mongoose
};