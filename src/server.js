const express = require('express');

const app = express();

app.get('/', (_req, res) => res.status(200).json({ message: 'API rodando' }));

module.exports = app;