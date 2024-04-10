require('dotenv').config();
/* Backend file */

/* server.js */

const express = require("express");
const cors = require("cors");

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from server.js.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

