var twitterKeys = require("./keys.js").twitterKeys;
var str = process.argv;
var tweets1 = "my-tweets";
var input = str[2];
var spotifyKeys = require("./keys.js").spotifyKeys;
var spot1 = "spotify-this-song";
var query2 = str[3];
var query3 = str[4];
var request = require("./keys.js").request;
var movies1 = "movie-this";
var doWhat = "do-what-it-says";
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
var wtf = require("./keys.js").wtf;
var wiki = "wiki";
var nba = require("./keys.js").nba;
var nba2 = "nba-stats";
var hp = require("./keys.js").hp;
var hp2 = "cast-a-spell";
var four = require("./keys.js").foursquare;
var four2 = "search-for";



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

console.log("type my-tweets for 20 recent Tweets");
console.log("type spotify-this-song + 'song name here' to find a song on Spotify");
console.log("type movie-this + 'movie name here' to find a movie on OMDB");
console.log("type pick-a-pokemon to get a random Pokemon");
console.log("type quote-me for an awesome quote");
console.log("type superhero for a random Marvel superhero");
console.log("type weather + 'city, state' or 'city, country' for current weather stats");
console.log("type wiki + 'thing' for that complete wiipedia page");
console.log("type nba-stats + 'player name' for that NBA player's stats");
console.log("type cast-a-spell to cast a random spell!");
console.log("type thats-what-she-said for a line from The Office (best show ever)");
console.log("type search-for + 'city' + 'thing' for a list of things in your city");

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
   // console.log(data2);

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
     
if  (wiki === input){

wtf.from_api(query2, "en", function(markup){
  var text = wtf.plaintext(markup)

  console.log(text);
 

     var wikiArr = [text];

  for (var i = 0; i < wikiArr.length; i++) {


    var fs = require("fs");
    fs.appendFile("log.txt", wikiArr[i] + "\r \n", function(data) {

    
 
   });
  }

  console.log("log.txt was updated!");
});
  }



if  (nba2 === input){

var search = nba.findPlayer(query2);

 // console.log(search.playerId);

nba.stats.playerInfo({ PlayerID: search.playerId }).then( function (id){

  // console.log(id);

  console.log("First Name: " + id.commonPlayerInfo[0].firstName);
   console.log("Last Name: " + id.commonPlayerInfo[0].lastName);
   console.log("Height: " + id.commonPlayerInfo[0].height + " ft");
   console.log("Weight: " + id.commonPlayerInfo[0].weight + " lbs");
   console.log("Number: " + id.commonPlayerInfo[0].jersey);
   console.log("Position: " + id.commonPlayerInfo[0].position);
  console.log("Team: " + id.commonPlayerInfo[0].teamName);
  console.log("City: " + id.commonPlayerInfo[0].teamCity);
  console.log("Points: " + id.playerHeadlineStats[0].pts);
  console.log("Assists: " + id.playerHeadlineStats[0].ast);
  console.log("Rebounds: " + id.playerHeadlineStats[0].reb);

    var nbaArr = [id.commonPlayerInfo[0].firstName, id.commonPlayerInfo[0].lastName, id.commonPlayerInfo[0].height, 
      id.commonPlayerInfo[0].weight, id.commonPlayerInfo[0].jersey, id.commonPlayerInfo[0].position, id.commonPlayerInfo[0].teamName, 
      id.commonPlayerInfo[0].teamCity, id.playerHeadlineStats[0].pts, id.playerHeadlineStats[0].ast, id.playerHeadlineStats[0].reb];

  for (var i = 0; i < nbaArr.length; i++) {


    var fs = require("fs");
    fs.appendFile("log.txt", nbaArr[i] + "\r \n", function(data) {

    
 
   });
  }

  console.log("log.txt was updated!");
}


  );


 

    

  }


if  (hp2 === input){



var info = hp.random();

console.log("Spell: " + info.name);
console.log("Type: " + info.type);
console.log("Effect: " + info.effect);
 

     var hpArr = [info.name, info.type, info.effect];

  for (var i = 0; i < hpArr.length; i++) {


    var fs = require("fs");
    fs.appendFile("log.txt", hpArr[i] + "\r \n", function(data) {

    
 
   });
  }

  console.log("log.txt was updated!");

  }


if  (office === input){



var dat = theofficequotes.random();

console.log(dat.quote);
console.log("- " + dat.name);


 var offArr = [dat.quote, dat.name];

  for (var i = 0; i < offArr.length; i++) {


    var fs = require("fs");
    fs.appendFile("log.txt", offArr[i] + "\r \n", function(data) {

    
 
   });
  }

  console.log("log.txt was updated!");
}


if  (four2 === input){

   var params = {
        "near": (query2 + ", CA"),
        "query": query3
      
    };

  four.getVenues(params, function(error, venues) {

g = 1;
        if (!error) {

var fourArr = [];
          for (var i = 0; i < 5; i++) {
         
        console.log("Result # " + g);  
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

      for (var h = 0; h < fourArr.length; h++) {


    var fs = require("fs");
    fs.appendFile("log.txt", fourArr[h] + "\r \n", function(data) {

    
 
   });
  }

  console.log("log.txt was updated!");
        }
    });

}