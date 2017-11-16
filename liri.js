var twitterKeys = require("./keys.js").twitterKeys;
var str = process.argv;
var tweets1 = "my-tweets";
var input = str[2];
var spotifyKeys = require("./keys.js").spotifyKeys;
var spot1 = "spotify-this-song";
var query2 = str[3];
var request = require("./keys.js").request;
var movies1 = "movie-this";

var spotArr = [];
var twitterArr = [];


if (tweets1 === input){
twitterKeys.get('favorites/list', function(tweets, response) {

 var tweetArr = [];

for (i=0; i < 20; i++){
   console.log(response[i].text); 
   console.log(response[i].created_at);
  

   tweetArr.push(response[i].text, response[i].created_at);


   } 


for (var i = 0; i < tweetArr.length; i++) {


  var fs = require("fs");
  fs.appendFile("log.txt", tweetArr[i] + "\r \n", function(data) {

    
 
 });
}

console.log("log.txt was updated!");


});

};

if (spot1 === input){

	spotifyKeys.search({ type: 'track', query: query2, limit: 1 }, function(err, data) {

console.log(data.tracks.items[0].album.artists[0].name);
console.log(data.tracks.items[0].name);
console.log(data.tracks.items[0].external_urls.spotify);
console.log(data.tracks.items[0].album.name);

var spotArr = [data.tracks.items[0].album.artists[0].name, data.tracks.items[0].name, 
              data.tracks.items[0].external_urls.spotify, data.tracks.items[0].album.name];

    // var spot2 = spotArr.split(",");

for (var i = 0; i < spotArr.length; i++) {


  var fs = require("fs");
  fs.appendFile("log.txt", spotArr[i] + "\r \n", function(data) {

    
 
 });
}

console.log("log.txt was updated!");



});
}

if (movies1 === input){

// 	if (query2 === ""){

// 		request('https://www.omdbapi.com/?t=mr+nobody&apikey=trilogy&' , function (error, response, data) {

//   console.log(JSON.parse(data).Title);
//   console.log(JSON.parse(data).Year);
//   console.log(JSON.parse(data).imdbRating);
// console.log(JSON.parse(data).Ratings[1].Value);
//   console.log(JSON.parse(data).Country);
//   console.log(JSON.parse(data).Language);
//   console.log(JSON.parse(data).Plot);
//   console.log(JSON.parse(data).Actors);
    
//  });
// 		}
// else
// 	{

	request('https://www.omdbapi.com/?apikey=trilogy&t=' + query2, function (error, response, data) {


var omdbArr = [JSON.parse(data).Title, JSON.parse(data).Year, JSON.parse(data).imdbRating, JSON.parse(data).Ratings[1].Value, 
JSON.parse(data).Country, JSON.parse(data).Language, JSON.parse(data).Plot, JSON.parse(data).Actors];
  

for (var i = 0; i < omdbArr.length; i++) {


  var fs = require("fs");
  fs.appendFile("log.txt", omdbArr[i] + "\r \n", function(data) {

    
 });
 
}

console.log("log.txt was updated!");





  console.log(JSON.parse(data).Title);
  console.log(JSON.parse(data).Year);
  console.log(JSON.parse(data).imdbRating);
console.log(JSON.parse(data).Ratings[1].Value);
  console.log(JSON.parse(data).Country);
  console.log(JSON.parse(data).Language);
  console.log(JSON.parse(data).Plot);
  console.log(JSON.parse(data).Actors);




});



  






}

