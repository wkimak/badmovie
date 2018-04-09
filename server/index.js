var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

var axios = require('axios');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder
app.get('/search', function(req, res) {
    let options = {
    	url: `https://api.themoviedb.org/3/discover/movie?api_key=9da4f9b0813ca9f766148b6f67c9a6eb&language=en-US&sort_by=vote_average.asc&page=1&with_genres=${req.query.genreId}`,
    	method: 'GET'
    }

    request(options, (err, response, body) => {
    	if(err){
    		console.log(err);
    	} else{
    		console.log('dsfdf', body);
    		res.send(body);
    	}
    })
   
    res.status(200);
})



app.get('/genres', function(req, res) {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=9da4f9b0813ca9f766148b6f67c9a6eb&language=en-US')
    .then((response) => {	
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    })

   res.status(200);
})

app.post('/save', function(req, res) {

})

app.post('/delete', function(req, res) {

})
app.listen(3000, function() {
  console.log('listening on port 3000!');
});