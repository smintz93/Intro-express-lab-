

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


// Tip Calculator

// Your app should have a route of '/tip' and it should expect 2 params. One should be total and one should be tipPercentage.


app.get("/tip/:total/:tipPercentage", (req, res) => {

	const total = parseInt(req.params.total)

	const tipPercentage = parseInt(req.params.tipPercentage)

	const finalAmount = ((total * tipPercentage) / 100).toString()

	res.send(finalAmount)


});


// const calc = total * tipPercentage

//  need total * tip % = totalTip

// need to turn into number
	






// Magic 8 Ball

const resp = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

const answer = function(){
		return Math.floor(Math.random()*resp.length)
	}

app.get("/magic/Will%20I%20Be%20A%20Millionaire", (req, res) => {

	res.send(resp[answer()])
})





app.listen(3000, () => {
	console.log('Server is listenning on Port 3000');
})