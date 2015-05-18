var express = require('express');

module.exports = function() {
	//creamos la app express
	var app = express ();
	//le pasamos la app como parametro al require
	require('../app/routes/index.server.routes.js')(app);
	return app;
};