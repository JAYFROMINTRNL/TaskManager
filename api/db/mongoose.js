// THIS HANDLES THE CONNECTION LOGIC TO THE MONOGODB DATABASE

const mongoose =  require('mongoose'); // Currently throwing the error "Cannot find module mongoose" 

mongoose.Promise = global.Promise;

// { useNewUrlParser: true }

mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true }).then(() => {
    console.log("Connected to mongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to mongoDB :(");
    console.log(e);
});


// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};