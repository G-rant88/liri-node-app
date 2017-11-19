var twitterKeys = require("./keys.js").twitterKeys;
var spotifyKeys = require("./keys.js").spotifyKeys;
var request = require("./keys.js").request;
var theofficequotes = require("./keys.js").theofficequotes;
var pokemon = require("./keys.js").pokemon;
var sw = require("./keys.js").sw;
var marvel = require("./keys.js").marvel;
var weather = require("./keys.js").weather;
var wtf = require("./keys.js").wtf;
var nba = require("./keys.js").nba;
var hp = require("./keys.js").hp;
var four = require("./keys.js").foursquare;
var geo = require("./keys.js").geo;
var inquirer = require("inquirer");
var namey;
var ee = require('easy-encryption');
var dataArr ;
var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

 
function start (){

console.log("Hi, I'm Liri! Please create an account to get started:\n");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your username?",
      name: "user"
    },
    {
      type: "password",
      message: "What is your password?",
      name: "pws",
      hidden: true,
      mask: "*"
    }
    ])
  .then(function(sign) {


 var ciphertext  = ee.encrypt('user', sign.user);


var fs = require("fs");
  fs.appendFile("log.txt", ("\n") + ciphertext + ("\n"), function(data) {

 });

console.log("log.txt was updated!\n");


 var ciphertext2  = ee.encrypt('pw', sign.pws);


var fs = require("fs");
  fs.appendFile("log.txt", ("\n") + ciphertext2 + ("\n"), function(data) {

 });
console.log("log.txt was updated!\n");

function signin(){

inquirer
  .prompt([
    {
      type: "input",
      message: "Please sign in with your username:",
      name: "user2"
    },
    {
      type: "password",
      message: "Please sign in with your password",
      name: "pws2",
      hidden: true,
      mask: "*"
    }
    ])

.then(function(sign2) {

 var plaintext   = ee.decrypt('user', ciphertext);
 var plaintext2   = ee.decrypt('pw', ciphertext2);

if (sign2.user2 === plaintext && sign2.pws2 === plaintext2){

 console.log("\nWelcome " + plaintext + "\n");
      namey = plaintext;
       choices();


}

else {

  console.log("Sorry, wrong username/password. Try again:\n")
  signin();
}



});

}

signin();

});


 }


function choices (){
	inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "choice",
      choices: ['my-tweets', 'spotify-this-song', 'movie-this', 'pick-a-pokemon', 
      'quote-me', 'pick-superhero', 'get-weather', 'wiki-this', 'nba-stats', 
      'cast-a-spell', 'thats-what-she-said', 'search-for', 'find', 'quit-Liri']
    }
])
.then(function(user) {

	 switch(user.choice){

		case 'spotify-this-song':
		spotify();
		break;

		case 'my-tweets':
		tweets();
		break;

		case 'movie-this':
		movie();
		break;

		case 'pick-a-pokemon':
		poke();
		break;

		case 'quote-me':
		qt();
		break;

		case 'pick-superhero':
		supers();
		break;

		case 'get-weather':
		weaths();
		break;

		case 'wiki-this':
		wiki();
		break;

		case 'nba-stats':
		nbas();
		break;

		case 'cast-a-spell':
		hps();
		break;

		case 'thats-what-she-said':
		twss();
		break;

		case 'find':
		find();
		break;

		case 'search-for':
		fours();
		break;

		case 'quit-Liri':
		stop();
		break;

	}

});
}


function spotify (){

inquirer
  .prompt([
    {
      type: "input",
      message: "Which song would you like to spotify?",
      name: "song"
    }
    ])
  .then(function(songy) {

spotifyKeys.search({ type: 'track', query: songy.song, limit: 1 }, function(err, data) {

console.log("\nBand: " + data.tracks.items[0].album.artists[0].name);
console.log("Song: " + data.tracks.items[0].name);
console.log("Link: " + data.tracks.items[0].external_urls.spotify);
console.log("Album: " + data.tracks.items[0].album.name + "\n");

var spotArr = [data.tracks.items[0].album.artists[0].name, data.tracks.items[0].name, 
              data.tracks.items[0].external_urls.spotify, data.tracks.items[0].album.name];

              var fs = require("fs");
  fs.appendFile("log.txt", ("\n") + spotArr.join("\n"), function(data) {

 });
console.log("log.txt was updated!\n");
 choices();


  })

  });
};


function tweets(){

var f=1;

	twitterKeys.get('favorites/list', function(tweets, response) {

 var tweetArr = [];

for (i=0; i < 20; i++){

   console.log("tweet #" + [f] + ": " + response[i].text + "\n"); 
   console.log("date: " + response[i].created_at + "\n");
 
   tweetArr.push(response[i].text, response[i].created_at);

  f++;

   } 

   var fs = require("fs");
  fs.appendFile("log.txt", ("\n") + tweetArr.join("\n"), function(data) {

 });

console.log("log.txt was updated!\n");
choices();
});

};


function movie(){


inquirer
  .prompt([
    {
      type: "input",
      message: "Which movie would you like to search for?",
      name: "movie"
    }
    ])
  .then(function(movies) {

  	request('https://www.omdbapi.com/?apikey=trilogy&t=' + movies.movie, function (error, response, data) {

console.log("\nTitle: " + JSON.parse(data).Title + "\n");
  console.log("Year: " + JSON.parse(data).Year + "\n");
  console.log("imdb Rating: " + JSON.parse(data).imdbRating + "\n");
console.log("RT Rating: " + JSON.parse(data).Ratings[1].Value + "\n");
  console.log("Country: " + JSON.parse(data).Country + "\n");
  console.log("Language: " + JSON.parse(data).Language + "\n");
  console.log("Plot: " + JSON.parse(data).Plot + "\n");
  console.log("Actors: " + JSON.parse(data).Actors + "\n");

var omdbArr = [JSON.parse(data).Title, JSON.parse(data).Year, JSON.parse(data).imdbRating, JSON.parse(data).Ratings[1].Value, 
JSON.parse(data).Country, JSON.parse(data).Language, JSON.parse(data).Plot, JSON.parse(data).Actors];


var fs = require("fs");
  fs.appendFile("log.txt", ("\n") + omdbArr.join("\n"), function(data) {

 });
 
console.log("log.txt was updated!\n");
choices();

})

});

}

function poke (){

var data = pokemon.randomize();
      console.log("\nPokemon name: " + data.name + "\n");
      console.log("Type: " + data.types + "\n");
      console.log("Index: " + data.index + "\n");

      var pokeArr = [data.name, data.types, data.index];

      var fs = require("fs");
   fs.appendFile("log.txt", ("\n") + pokeArr.join("\n"), function(data) {

  });
 console.log("log.txt was updated!\n");
 choices();

  }

function qt(){

var swf = sw();
      console.log("\n" + swf + "\n");

       var swArr = [swf];

var fs = require("fs");
    fs.appendFile("log.txt", ("\n") + swArr.join("\n"), function(data) {
   });
 
  console.log("log.txt was updated!\n");
  choices();

}

function supers(){

var allNames = marvel.all;
var randomName = marvel.random();

      console.log("\nMarvel superhero: " + randomName + "\n");

     var marvArr = [randomName];

var fs = require("fs");
    fs.appendFile("log.txt", ("\n") + marvArr.join("\n"), function(data) {
   });
 
  console.log("log.txt was updated!\n");
  choices();

}

function weaths(){

inquirer
  .prompt([
    {
      type: "input",
      message: "Which city and state/country would you like to get the weather for?",
      name: "weath"
    }
    ])
  .then(function(dat) {

  	weather.find({search: dat.weath, degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  console.log("\nCity: " + result[0].location.name + "\n");
   console.log("Current Temperature: " + result[0].current.temperature + " degrees F\n");
   console.log("Current Sky: " + result[0].current.skytext + "\n");
   console.log("Current Wind Speed: " + result[0].current.windspeed + "\n");
   console.log("Current Humidity: " + result[0].current.humidity + "\n")
   console.log("Observation Time: " + result[0].current.observationtime + "\n")
   console.log("Current Date: " + result[0].current.date + "\n")

var weathArr = [result[0].location.name, result[0].current.temperature, result[0].current.skytext, result[0].current.windspeed, 
     result[0].current.humidity, result[0].current.observationtime, result[0].current.date];

var fs = require("fs");
    fs.appendFile("log.txt", ("\n") + weathArr.join("\n"), function(data) {
   });

       console.log("log.txt was updated!\n");
  choices();

 });

});

}

function wiki (){


inquirer
  .prompt([
    {
      type: "input",
      message: "Which Wikipedia page would you like to find?",
      name: "wikip"
    }
    ])
  .then(function(info) {

  	wtf.from_api(info.wikip, "en", function(markup){
  var text = wtf.plaintext(markup)

  console.log("\n" + text + "\n");
 

     var wikiArr = [text];

var fs = require("fs");
    fs.appendFile("log.txt", ("\n") + wikiArr.join("\n"), function(data) {
   });

       console.log("log.txt was updated!\n");
  choices();

});

  });

}

function nbas (){

inquirer
  .prompt([
    {
      type: "input",
      message: "Which NBA player's stats would you like to get?",
      name: "nbap"
    }
    ])
  .then(function(info) {

  	var search = nba.findPlayer(info.nbap);

nba.stats.playerInfo({ PlayerID: search.playerId }).then( function (id){

 console.log("\nFirst Name: " + id.commonPlayerInfo[0].firstName + "\n");
   console.log("Last Name: " + id.commonPlayerInfo[0].lastName + "\n");
   console.log("Height: " + id.commonPlayerInfo[0].height + " ft\n");
   console.log("Weight: " + id.commonPlayerInfo[0].weight + " lbs\n");
   console.log("Number: " + id.commonPlayerInfo[0].jersey + "\n");
   console.log("Position: " + id.commonPlayerInfo[0].position + "\n");
  console.log("Team: " + id.commonPlayerInfo[0].teamName + "\n");
  console.log("City: " + id.commonPlayerInfo[0].teamCity + "\n");
  console.log("Points: " + id.playerHeadlineStats[0].pts + "\n");
  console.log("Assists: " + id.playerHeadlineStats[0].ast + "\n");
  console.log("Rebounds: " + id.playerHeadlineStats[0].reb + "\n");

 var nbaArr = [id.commonPlayerInfo[0].firstName, id.commonPlayerInfo[0].lastName, id.commonPlayerInfo[0].height, 
      id.commonPlayerInfo[0].weight, id.commonPlayerInfo[0].jersey, id.commonPlayerInfo[0].position, id.commonPlayerInfo[0].teamName, 
      id.commonPlayerInfo[0].teamCity, id.playerHeadlineStats[0].pts, id.playerHeadlineStats[0].ast, id.playerHeadlineStats[0].reb];

var fs = require("fs");
    fs.appendFile("log.txt", ("\n") + nbaArr.join("\n"), function(data) {
   });

       console.log("log.txt was updated!\n");
  choices();

});

  });

}

function hps(){

var info = hp.random();

console.log("\nYou Casted: " + info.name + "\n");
console.log("Type: " + info.type + "\n");
console.log("Effect: " + info.effect + "\n");

     var hpArr = [info.name, info.type, info.effect];

var fs = require("fs");
    fs.appendFile("log.txt", ("\n") + hpArr.join("\n"), function(data) {
   });
 
  console.log("log.txt was updated!\n");
  choices();


}


function twss(){

var dat = theofficequotes.random();

console.log("\n" + dat.quote + "\n");
console.log("- " + dat.name + "\n");


 var offArr = [dat.quote, dat.name];

var fs = require("fs");
    fs.appendFile("log.txt", ("\n") + offArr.join("\n"), function(data) {
   });
 
  console.log("log.txt was updated!\n");
  choices();
}


function find (){

inquirer
  .prompt([
    {
      type: "input",
      message: "Which place/thing/city would you like to locate?",
      name: "geos"
    }
    ])
  .then(function(info) {

geo.geocode(info.geos, function ( err, data ) {

   console.log("\nCity: " + data.results[0].formatted_address + "\n");
   console.log("Type: " + data.results[0].types[0] + "\n");
  
var geoArr = [data.results[0].formatted_address, data.results[0].types[0]];

var fs = require("fs");
    fs.appendFile("log.txt", ("\n") + geoArr.join("\n"), function(data) {
   });

       console.log("log.txt was updated!\n");
  choices();

});

  });

}


function fours (){

inquirer
  .prompt([
    {
      type: "input",
      message: "Where would you like to search?",
      name: "place"
    },
     {
      type: "input",
      message: "What would you like to search for?",
      name: "thing"
    }

    ])
  .then(function(info) {

 var params = {
        "near": (info.place + ", CA"),
        "query": info.thing
      
    };

  four.getVenues(params, function(error, venues) {

  	g = 1;
        if (!error) {

var fourArr = [];
          for (var i = 0; i < 5; i++) {
         
        console.log("\nResult # " + g);  
        console.log("Name: " + venues.response.venues[i].name);
        console.log("Phone: " + venues.response.venues[i].contact.formattedPhone);
        console.log("Street: " + venues.response.venues[i].location.address);
        console.log("City: " + venues.response.venues[i].location.city);
        console.log("Category: " + venues.response.venues[i].categories[0].name);
        console.log("");

        g++;

          fourArr.push(venues.response.venues[i].name, venues.response.venues[i].contact.formattedPhone, 
         venues.response.venues[i].location.address, venues.response.venues[i].location.city, 
         venues.response.venues[i].categories[0].name);

  
      }

var fs = require("fs");
    fs.appendFile("log.txt", ("\n") + fourArr.join("\n"), function(data) {
   });

       console.log("log.txt was updated!\n");
  choices();


}

});

  });

}

function stop(){

	console.log("\nGoodbye " + namey + "!\n");
}

start();