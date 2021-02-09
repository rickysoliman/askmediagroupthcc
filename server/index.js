const express = require('express');
const path = require('path');
// const pool = require('../db/queries.js');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});