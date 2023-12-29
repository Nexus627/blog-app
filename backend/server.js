// attach the environment variables to the process.env object
require('dotenv').config();

const express = require('express');
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

app.use('/api/workouts', workoutRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on port 3000');
});