const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/passner', { useNewUrlParser: true, useUnifiedTopology: true }).catch(err => console.log(err))
mongoose.set('useCreateIndex', true);

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'Error de conexión:'))

database.once('open', function () { console.log("Conectado correctamente en la base de datos: ", database.name) })