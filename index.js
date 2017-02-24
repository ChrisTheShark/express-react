'use strict';
const express = require('express'),
    app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('public/index.html');
});

app.listen(3000, error => {
    if (error) {
        console.error(error.message);
        throw error;
    }
});
