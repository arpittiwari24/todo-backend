import express from "express"
import { deleteTask, newTask, readTask, updateTask } from "../controller/todo.js"

const router = express.Router()

router.get("/",readTask)

router.post("/",newTask)

router.put("/:id",updateTask)

router.delete('/:id',deleteTask)

export default router