require('dotenv').config();
const express = require('express');
const cors = require("cors");
const path  = require("path");



const connectDB = require('./config/db');

const app = express();


// routes
const data = require('./routes/data_routes');

// connect database
connectDB();

app.use(cors());

// initialize middleware

app.use(express.json({ extended: false }));

app.use(
    express.static(path.join(__dirname,"../client/build"))
)
app.get("/", (req, res) => res.send("Server is running"));

// use routes


app.use('/api/data', data);
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../client/build/index.html"))
});
// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));