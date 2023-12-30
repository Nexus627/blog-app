// attach the environment variables to the process.env object
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();

// middlewares

// logging request information
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// parsing application/json
app.use(express.json());

// parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    // start listening only after db is connected
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
