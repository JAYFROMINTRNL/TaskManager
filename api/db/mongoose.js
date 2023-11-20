// THIS HANDLES THE CONNECTION LOGIC TO THE MONOGODB DATABASE

const mongoose =  require('mongoose'); // Currently throwing the error "Cannot find module mongoose" 

mongoose.Promise = global.Promise;

// { useNewUrlParser: true })

// mongoose.connect('mongodb://localhost:27017/TaskManager').then(() => {
//     console.log("Connected to mongoDB successfully :)");
// }).catch((e) => {
//     console.log("Error while attempting to connect to mongoDB :(");
//     console.log(e);
// });

mongoose.connect('mongodb://localhost:27017', {dbName: 'TaskManager'});


// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('bufferCommands', false);

module.exports = {
    mongoose
};