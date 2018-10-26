const http = require('http');
const port = 3000;
const fs = require('fs');

var append = fs.appendFile('hello-world.txt', 'hello to this great world', function(err){
    if(err) throw err;
    console.log('Updated!')
})

const server = http.createServer(append());

server.listen(port, (err) => {
    if (err) {
      return console.log(`You have an error:  ${err}`);
    }
  
    console.log(`server is listening on ${port}`);
  });

/* Create a Github repo called 
simple-http-node-server. Create 
an HTTP server on port 3000 with 
a request handler that creates a 
file named hello-world.txt. You will 
be using the fs module to do this.
 Write the content: 
 "Hello to this great world" 
 to the hello-world.txt file. 
 Please submit your finished 
 code in your submission. */