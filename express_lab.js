

const express = require('express');
const app = express();


// app.get('/', (request, response) => {
// 	response.send('Hi, im the server')
// })


// //Greetings App
// app.get('/greeting/:name', (req, res) => {
//   res.send({params: req.params, queries: req.query})
// });


// Your app should have a route of '/greeting/' and it should send a generic greeting to the screen like "Hello, stranger".


app.get('/greeting', (req, res) => {
  res.send("Hello Stranger")
});

// Your app should have a route of '/greeting/:name' and it should expect 1 param which takes in a person's name.


app.get("/greeting/:name", (req, res) => {
  res.send("Hello " + req.params.name)
});








app.listen(3000, () => {
	console.log('Server is listenning on Port 3000');
})