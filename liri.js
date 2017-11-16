var twitterKeys = require("./keys.js").twitterKeys;
var str = process.argv;
var tweets1 = "my-tweets";
var input = str[2];
var spotifyKeys = require("./keys.js").spotifyKeys;
var spot1 = "spotify-this-song";
var query2 = str[3];
var request = require("./keys.js").request;
var movies1 = "movie-this";
var doWhat = "do-what-it-says";

var spotArr = [];
var twitterArr = [];
f =1;

if (tweets1 === input){
twitterKeys.get('favorites/list', function(tweets, response) {

 var tweetArr = [];

for (i=0; i < 20; i++){

  
   console.log("tweet #" + [f] + " " + response[i].text); 
   console.log("date: " + response[i].created_at);
  

   tweetArr.push(response[i].text, response[i].created_at);

  f++;

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

    if (query2 === undefined){


      spotifyKeys.search({ type: 'track', query: 'Here comes the sun', limit: 1 }, function(err, data) {

console.log("Band: " + data.tracks.items[0].album.artists[0].name);
console.log("Song: " + data.tracks.items[0].name);
console.log("Link: " + data.tracks.items[0].external_urls.spotify);
console.log("Album: " + data.tracks.items[0].album.name);

var spotArr = [data.tracks.items[0].album.artists[0].name, data.tracks.items[0].name, 
              data.tracks.items[0].external_urls.spotify, data.tracks.items[0].album.name];



for (var i = 0; i < spotArr.length; i++) {


  var fs = require("fs");
  fs.appendFile("log.txt", spotArr[i] + "\r \n", function(data) {

    
 
 });
}

console.log("log.txt was updated!");



});
}

else {

	spotifyKeys.search({ type: 'track', query: query2, limit: 1 }, function(err, data) {

console.log("Band: " + data.tracks.items[0].album.artists[0].name);
console.log("Song: " + data.tracks.items[0].name);
console.log("Link: " + data.tracks.items[0].external_urls.spotify);
console.log("Album: " + data.tracks.items[0].album.name);

var spotArr = [data.tracks.items[0].album.artists[0].name, data.tracks.items[0].name, 
              data.tracks.items[0].external_urls.spotify, data.tracks.items[0].album.name];



for (var i = 0; i < spotArr.length; i++) {


  var fs = require("fs");
  fs.appendFile("log.txt", spotArr[i] + "\r \n", function(data) {

    
 
 });
}

console.log("log.txt was updated!");



});

}
}

if (movies1 === input){

 	if (query2 === undefined){

 		request('https://www.omdbapi.com/?t=mr+nobody&apikey=trilogy&' , function (error, response, data) {



var omdbArr = [JSON.parse(data).Title, JSON.parse(data).Year, JSON.parse(data).imdbRating, JSON.parse(data).Ratings[1].Value, 
JSON.parse(data).Country, JSON.parse(data).Language, JSON.parse(data).Plot, JSON.parse(data).Actors];
  

for (var i = 0; i < omdbArr.length; i++) {


  var fs = require("fs");
  fs.appendFile("log.txt", omdbArr[i] + "\r \n", function(data) {

    
 });
 
}

console.log("log.txt was updated!");

  console.log("Title: " + JSON.parse(data).Title);
  console.log("Year: " + JSON.parse(data).Year);
  console.log("imdb Rating: " + JSON.parse(data).imdbRating);
console.log("RT Rating: " + JSON.parse(data).Ratings[1].Value);
  console.log("Country: " + JSON.parse(data).Country);
  console.log("Language: " + JSON.parse(data).Language);
  console.log("Plot: " + JSON.parse(data).Plot);
  console.log("Actors: " + JSON.parse(data).Actors);

    
  });
 		}
 else
 	{

	request('https://www.omdbapi.com/?apikey=trilogy&t=' + query2, function (error, response, data) {


var omdbArr = [JSON.parse(data).Title, JSON.parse(data).Year, JSON.parse(data).imdbRating, JSON.parse(data).Ratings[1].Value, 
JSON.parse(data).Country, JSON.parse(data).Language, JSON.parse(data).Plot, JSON.parse(data).Actors];
  

for (var i = 0; i < omdbArr.length; i++) {


  var fs = require("fs");
  fs.appendFile("log.txt", omdbArr[i] + "\r \n", function(data) {

    
 });
 
}

console.log("log.txt was updated!");





  console.log("Title: " + JSON.parse(data).Title);
  console.log("Year: " + JSON.parse(data).Year);
  console.log("imdb Rating: " + JSON.parse(data).imdbRating);
console.log("RT Rating: " + JSON.parse(data).Ratings[1].Value);
  console.log("Country: " + JSON.parse(data).Country);
  console.log("Language: " + JSON.parse(data).Language);
  console.log("Plot: " + JSON.parse(data).Plot);
  console.log("Actors: " + JSON.parse(data).Actors);

});


}

}

if (doWhat === input) {

var fs = require("fs");
  fs.readFile("random.txt", "utf8", function(err, data) {

    if (err) {
     console.log(err);
   }

   data2 =  data.split(",");
   console.log(data2);

   spotifyKeys.search({ type: 'track', query: data2[1], limit: 1 }, function(err, data) {

 console.log("Band: " + data.tracks.items[0].album.artists[0].name);
 console.log("Song: " + data.tracks.items[0].name);
 console.log("Link: " + data.tracks.items[0].external_urls.spotify);
 console.log("Album: " + data.tracks.items[0].album.name);

 var spotArr = [data.tracks.items[0].album.artists[0].name, data.tracks.items[0].name, 
               data.tracks.items[0].external_urls.spotify, data.tracks.items[0].album.name];



 for (var i = 0; i < spotArr.length; i++) {


   var fs = require("fs");
   fs.appendFile("log.txt", spotArr[i] + "\r \n", function(data) {

    
 
  });
 }

 console.log("log.txt was updated!");



 });


    
});



}