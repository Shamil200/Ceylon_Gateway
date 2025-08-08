const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');


const app = express();

app.use(helmet());

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(morgan('combined'));

app.use((req, res, next) => {
    req.body = req.body || {};
    next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// '/*' can be specified to mention root routing (ex: '/' routes to index.html)
// '/{*splat}' or '/*splat' to mention any with root routing (ex: '/thisisme' routes to index.html)
app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;