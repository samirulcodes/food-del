import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"





// app config
const app=express()
const port=4000

// middleware
app.use(express.json())
app.use(cors())

// DB connection
connectDB()

// *********************** ERROR *********************
// api endpoints
app.use("/api/food",foodRouter)
// *********************** ERROR *********************

app.use("/images",express.static('uploads'))



app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
    
})



// mongodb+srv://aman:<db_password>@cluster0.iykn9.mongodb.net/?