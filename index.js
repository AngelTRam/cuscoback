const express = require('express');
const morgan = require('morgan');
const {mongoose} = require('./database');
const cors = require ('cors');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200'}));

//Routes
app.use('/api/sensor',require ('./routes/sensor.routes'));
app.use('/api/datos',require ('./routes/datos.routes'));
app.use('/api/contador',require ('./routes/contador.routes'));
app.use('/api/password',require ('./routes/password.routes'));


//Server
app.listen(app.get('port'), () => {
    console.log('Server on port: ' + app.get('port'));
});