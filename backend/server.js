/* /backend/server.js */

const express = require('express');
const connectDB = require('./util/database');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello welcome to Server!');
});

//Connecting to mongoDb
connectDB();

// Using the data router
const dataRouter = require('./router/dataRouter');
app.use('/api', dataRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
