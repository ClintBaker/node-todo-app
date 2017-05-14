const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });
//

// Todo.findOneAndRemove({text: 'bonkers'}).then((res) => {
//   console.log(JSON.stringify(res, undefined, 2));
// });

// Todo.findByIdAndRemove('5917bdaeb3ea566a2d3cebed').then((todo) => {
//   console.log(JSON.stringify(todo, undefined, 2));
// });
