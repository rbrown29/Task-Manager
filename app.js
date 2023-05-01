const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect.js');
const cors = require('cors');
const notFound = require('./middleware/notFound.js');
const errorHandlerMiddleware = require('./middleware/error-handler.js');

// CORS
app.use(cors());
app.options('*', cors());


// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

// Start server
const port = process.env.PORT || 3000;

const start = async () => {
    try {
        // Connect the DB first before starting the server
        await connectDB();
        app.listen(port, () => {
            console.log(`Server running on port ${port}...`);
        });
    } catch (err) {
        console.log(err);
        console.log('Error connecting to the MongoDB database');
    }
};

start();



