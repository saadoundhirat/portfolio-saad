'use strict';
const { request } = require('express');
// declare a variable called express to use the express framework 
const express = require('express');

// passi ng all express methods to the server variable to use all express methods using it // so can i use server.method() 
const server = express();

// waking up the server to answers the requiests that comes in the (port) => store the port in variable and make the server listen to it .
const PORT = 3000; //DECLARE PORT AND MAKE IT CAPITAL 
//make the server listen to this port 
server.listen(PORT,()=>{
    console.log(`Listen to this port: ${PORT}`);
});

// to make the server sen an respons when ever he reseves a requiest from the user 
server.get('/test' , (request,responce)=>{
    responce.send('this is the responce from the server');
    // the server can responce with anything (data /img/objects...etc)
});

// root in localhost
server.get('/',(request,responce)=>{
    responce.send('this is the root')
});
