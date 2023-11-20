const { List } = require('./list.model');
const { Task } = require('./task.model');

// process.on('uncaughtException', function (err) {
//     console.log(err);
// });

module.exports = {
    List,
    Task
}