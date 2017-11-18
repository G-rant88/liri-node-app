console.log('this is loaded');
var Twitter = require('twitter');
var twitterKeys = new Twitter ({
  consumer_key: 'oJ92AtkN8QX5PaXDIcpC1KUFw',
  consumer_secret: 'iWBK5MEnu9dZK8eKjheEGx8k5RL289VdMGEMelcXc2ulrjgYtR',
  access_token_key: '29364794-60cQWQhN2shg6UByT1QUXGFY3Xu7sQHwFREOTX6kp',
  access_token_secret: 'aKUjtpmwYNwN0GBr5WVZ5ObE3IR25VEdq6MpiRafsYEB4'
});

var Spotify = require('node-spotify-api');
var spotifyKeys = new Spotify({
  id: 'e112bf4247084aba8a312d76ef1852ab',
  secret: 'a27f82f283db42b084051c12eb4fcd43'
});

var request = require('request');

var pokemon = require('pokemon-picker');

var theofficequotes = require("the-office-quotes");

var sw = require('star-wars-quotes');

var marvel = require('marvel-comics-characters');

var weather = require('weather-js');

var wtf = require("wtf_wikipedia");

var nba = require("nba");

var hp = require('harry-potter-spells');

var foursquare = (require('foursquarevenues'))('YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5', 
  'UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU');

 var geo = require('geocoder');


module.exports = {
	
   twitterKeys: twitterKeys,
   spotifyKeys: spotifyKeys,
   request: request,
   pokemon: pokemon,
   theofficequotes: theofficequotes,
   sw: sw,
   marvel: marvel,
   weather: weather,
   wtf:wtf,
   nba: nba,
   hp: hp,
   foursquare: foursquare,
   geo: geo


}