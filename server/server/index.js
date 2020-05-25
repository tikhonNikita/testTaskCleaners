const express = require('express');
const bodyParser = require('body-parser');

const routerUsers = require('./server/routes/routerUsers');
const routerServices = require('./server/routes/routerServices');
const routerDryers = require('./server/routes/routerDryers');
const routerOrders = require('./server/routes/routerOrders');

const app = express();

app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routerOrders);
app.use('/api', routerServices);
app.use('/api', routerUsers);
app.use('/api', routerDryers);

app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'), () => {
  console.log(`Server is listening to port ${app.get('port')}`);
});
