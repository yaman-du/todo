const express = require("express");

const TodoModel = require("../model/todoModel")

const todoRouter = express.Router();

//render sidan kommer länkas till namnet som är sammanlkopplad med ejs filen.
// res.render("commentsView, {object}

todoRouter.post("/todo", async (req,res) =>{
    const addTodo = new TodoModel ({
        todo: req.body.todo,
        todo_day: req.body.todo_day,
        whose_list: req.body.whose_list
    })
    await addTodo.save( (error, success)=> {
        if(error) {
            console.log(error);
        res.send(error.message)
        }
        else
        res.redirect("/todo") 
    });
});

todoRouter.get("/todo", async (req, res) =>{
    const todoAnswer = await TodoModel.find()
    res.render("todoView", {todoAnswer, title:"yamandus sida "});
});

todoRouter.get("/delete/:id", async (req, res)=>{
    console.log("deleted id: " + req.params.id);
    await TodoModel
    .deleteOne({_id:req.params.id});
    //res.send("It works");
    res.redirect("/todo") 
})

todoRouter.get("/edit/:id", async (req, res) => {
    const response = await TodoModel.findById({_id:req.params.id})
    console.log(response);
    res.render("edit", {response});
});

todoRouter.post("/edit/:id", async(req, res) =>{
    await TodoModel.updateOne({_id:req.body._id},
        {$set: {todo: req.body.todo, todo_day: req.body.todo_day, whose_list: req.body.whose_list}}, {runValidators: true})
        res.redirect("/todo")
    })
 
module.exports = todoRouter;