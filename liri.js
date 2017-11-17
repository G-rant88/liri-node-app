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
var query3 = "";
var office = "thats-what-she-said";
var spotArr = [];
var twitterArr = [];
var f =1;
var theofficequotes = require("./keys.js").theofficequotes;
var pokemon = require("./keys.js").pokemon;
var poke = "pick-a-pokemon";
var sw = require("./keys.js").sw;
var swq = "quote-me";
var help = "help";
var marvel = require("./keys.js").marvel;
var marv = "superhero";
var weather = require("./keys.js").weather;
var weath = "weather";


// for (var i = 2; i < str.length; i++) {

//   if (i > 2 && i < str.length) {

//     query3 = query3 + "+" + str[i];
//     query3 = query3;

//   }

//   else {

//     query3 += str[i];

//   }
// }


if (help === input){

console.log("type 'my-tweets' for 20 recent Tweets");
console.log("type 'spotify-this-song' + 'song name here' to find a song on Spotify");
console.log("type 'movie-this' + 'movie name here' to find a movie on OMDB");
console.log("type 'pick-a-pokemon' to get a random Pokemon");
console.log("type 'quote-me' for an awesome quote");
console.log("type 'superhero' for a random Marvel superhero");
console.log("type 'weather' + 'city, state' or 'city, country' for current weather stats");


}

if (tweets1 === input){
twitterKeys.get('favorites/list', function(tweets, response) {

 var tweetArr = [];


for (i=0; i < 20; i++){

  
   console.log("tweet #" + [f] + ": " + response[i].text); 
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

if  (poke === input){

      var data = pokemon.randomize();
      console.log("Pokemon name: " + data.name);
      console.log("Type: " + data.types);
      console.log("Index: " + data.index);

      var pokeArr = [data.name, data.types, data.index];


 for (var i = 0; i < pokeArr.length; i++) {


   var fs = require("fs");
   fs.appendFile("log.txt", pokeArr[i] + "\r \n", function(data) {

    
 
  });
 }

 console.log("log.txt was updated!");

  }



if  (swq === input){

var swf = sw();
      console.log(swf);

       var swArr = [swf];


  for (var i = 0; i < swArr.length; i++) {


    var fs = require("fs");
    fs.appendFile("log.txt", swArr[i] + "\r \n", function(data) {

    
 
   });
  }

  console.log("log.txt was updated!");

  }


if  (marv === input){

var allNames = marvel.all;
var randomName = marvel.random();

      console.log("Marvel superhero name: " + randomName);

     var marvArr = [randomName];

  for (var i = 0; i < marvArr.length; i++) {


    var fs = require("fs");
    fs.appendFile("log.txt", marvArr[i] + "\r \n", function(data) {

    
 
   });
  }

  console.log("log.txt was updated!");

  }

if  (weath === input){

 weather.find({search: query2, degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 

  // console.log(result);
  console.log("City: " + result[0].location.name);
   console.log("Current Temperature: " + result[0].current.temperature + " degrees F");
   console.log("Current Sky: " + result[0].current.skytext);
   console.log("Current Wind Speed: " + result[0].current.windspeed);
   console.log("Current Humidity: " + result[0].current.humidity)
   console.log("Observation Time: " + result[0].current.observationtime)
   console.log("Current Date: " + result[0].current.date)



     var weathArr = [result[0].location.name, result[0].current.temperature, result[0].current.skytext, result[0].current.windspeed, 
     result[0].current.humidity, result[0].current.observationtime, result[0].current.date];

  for (var i = 0; i < weathArr.length; i++) {


    var fs = require("fs");
    fs.appendFile("log.txt", weathArr[i] + "\r \n", function(data) {

    
 
   });
  }
});
  console.log("log.txt was updated!");

  }
     







// if  (office === input){


//    require( JSON.stringify(theofficequotes), function(data){

//       console.log(JSON.parse(data));

//      });
//         }