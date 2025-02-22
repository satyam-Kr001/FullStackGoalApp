const mongoose = require('mongoose');

const schema = mongoose.Schema;

const goalSchema = new schema({
    text: String
});

const GoalModel = mongoose.model('Goal', goalSchema);

module.exports = GoalModel;