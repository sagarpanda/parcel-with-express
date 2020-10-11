const Bundler = require('parcel-bundler');
const express = require('express');
const api = require('./api');

let app = express();
app.use('/api', api);

const bundlerOptions = { production: process.env.NODE_ENV === 'production' };
const bundler = new Bundler('gui/index.html', bundlerOptions);
app.use(bundler.middleware());

app.listen(5000);