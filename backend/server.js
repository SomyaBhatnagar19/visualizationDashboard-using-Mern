/* /backend/server.js */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello welcome to Server!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
