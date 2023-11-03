import auth from "./routes/auth"
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
var corsOptions = {
    origin: "https://silver-daffodil-41ec78.netlify.app/" //will need to be changed for netlify deploy
};
app.use(cors(corsOptions));
// Body parser
app.use(express.json());

// Routes
app.use("/api/auth", auth);
app.use('*', (req,res) => {
    res.status(404).json({error: "not found"});
});

// Use the new URL parser and the unified topology options
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log('App is listening');
        });
    })
    .catch((error) => {
        console.log(error);
    });

const PORT = process.env.PORT || 5000;



