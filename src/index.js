const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Olá felp' });
});

app.listen(3333);