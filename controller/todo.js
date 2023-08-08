import Task from "../model/todo.js"

export const readTask = (req,res) => {
    Task.find()
    .then((task) => res.json(task))
    .catch((err) => res.status(404).json({message : `Could not find the Task ${err.message}`}))
}

export const newTask = (req,res) => {
    Task.create(req.body)
    .then((data) => res.json({message: "Task added successfully", data}))
    .catch((err) => res.status(400).json({message: `Could not add the Task ${err.message}`}))
}

export const updateTask = (req,res) => {
    Task.findByIdAndUpdate(req.params.id,req.body)
    .then((data) => res.json({message: "task updated successfully",data}))
    .catch((err) => res.status(400).json({message: `Could not update the Task ${err.message}`}))
}

export const deleteTask = (req,res) => {
    Task.findByIdAndRemove(req.params.id,req.body)
    .then((data) => res.json({message: "Task removed successfully", data}))
    .catch((err) => res.status(404).json({message: `Task not found ${err.message}`}))
}