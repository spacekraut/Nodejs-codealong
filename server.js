// Require http module to initiate server
const http = require('http');
const fs = require('fs');
const _ = require('lodash');
// Create server/ with callback function that takes in request, response objects
const server = http.createServer((req, res)=>{

    const nodo = _.random(0, 20);
    console.log(nodo);


    const greet = _.once (() => {
      console.log('hello');
    });

    greet()
    greet()
    //we're calling url(we see which url was typed) and method(GET,POST,etc) requests from request object (it contains hundreds)
    // console.log(req.url, req.method);
    // set header content type / what kind of information ar we sending back/ RESPONSE
    res.setHeader('Content-Type', 'text/html');



    //  We create routing system with switch and send variable - path to fs.readFile which then sends it to html
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
        break
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
        break
        // redirecting to another page
        case '/about-bla':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end()
      default: 
        path += '404.html';
        res.statusCode = 404;
        break;
    }


    // Send an html file 
    fs.readFile(path,(err,data) => {
      if(err){
        console.log(err);
        res.end();
      } else {
        res.write(data);
        
        res.end();
      }
    })

}); 
//we add event listener to our server
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
})

