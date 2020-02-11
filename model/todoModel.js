const mongoose = require("mongoose");

const schemaTodo = new mongoose.Schema(
    {
        todo: {type: String, required:true},
        todo_day: {type: String, required: true},
        date: {type: Date, default: Date.now},
        whose_list: {type: String, required:true}
    }
)

const TodoPost = mongoose.model("Todo", schemaTodo);
module.exports = TodoPost;