/* /backend/server.js */

const express = require('express');
const connectDB = require('./util/database');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello welcome to Server!');
});

//connecting to mongoDb
connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
