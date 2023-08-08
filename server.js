import  express from "express";
import { config }from "dotenv"
import { connectDB } from "./config/db.js";
import router from "./router/todo.js";
import cors from "cors"

const app = express()

config({
    path: "./config.env"
})

app.use(express.json({extended: false}))

app.use(cors({
    origin:"*",
    credentials: true
}))

app.use("/api/task",router)


app.get("/",(req,res) => {
    res.send("nice working")
})

connectDB()

const port =  5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));