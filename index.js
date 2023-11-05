
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

pp.use(cors({
    origin: 'https://guileless-brioche-374dcd.netlify.app/',
    credentials: true, // Enable cookies and authentication headers
    methods: 'GET, POST, PUT, DELETE', // Specify allowed methods
  }));
// Body parser
app.use(express.json());

// Routes
app.use("/", require("./routes/auth"));


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



