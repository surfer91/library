const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port=process.env.PORT||3000;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_module/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_module/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_module/jquery/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
  debug(`listenig on port ${port}`);
});
