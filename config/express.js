var config = require('./config'),
session = require('express-session'), 
express = require('express'),
morgan = require('morgan'),
compression = require('compression'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
ejs = require('ejs');

module.exports = function() {
	//creamos la app express
	var app = express ();

	//configuramos la app
	if (process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));
	}else if (process.env.NODE_ENV === 'production'){
		app.use(compression());
	};

	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(session({
		saveUninitialized:true,
		resave:true,
		secret:config.sessionSecret
	}));
	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	//le pasamos la app como parametro al require
	require('../app/routes/index.server.routes.js')(app);
	//que busque los estáticos en la carpeta public
	app.use(express.static('./public'));

	return app;
};