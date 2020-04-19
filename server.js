'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello!!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

/*
Further reading: 

	https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/
	https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable
	http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/


*/ 
