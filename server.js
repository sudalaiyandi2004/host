// index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Define another route
app.get('/about', (req, res) => {
    res.send('About this application.');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
