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
// var str = process.argv;
// var query = str.splice(0).join(" ");


function start (){


	inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
    ])
  .then(function(res) {
    
    if (res.confirm) {
      console.log("\nWelcome " + res.username);
      choices();
}

   else {
      console.log("\nThat's okay " + res.username + ", come back later.\n");
    }
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
      'cast-a-spell', 'thats-what-she-said', 'search-for', 'find']
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
  fs.appendFile("log.txt", spotArr.join("\n"), function(data) {

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
  fs.appendFile("log.txt", tweetArr.join("\n"), function(data) {

 });

console.log("log.txt was updated!\n");
choices();
});

};


start();