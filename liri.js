require("dotenv").config();

// variables

// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var moment = require("moment");
moment().format();

var axios = require("axios");
var fs = require('fs');

var userOption = process.argv[2];
var userInput = process.argv[3];

switch (userInput) {
    case "concert-this":
        concertThis(userOption);
        break;
    case "movie-this":
        movieThis(userOption);
        break;
    case "do-what-it-says":
        doThis(userOption);
        break;
    case "spotify-this-song":
        spotifySong(userOption);
        break;

};

// function concertThis() {
axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(
    function (response) {
        for (var i = 0; i < response.data.length; i++) {
            console.log("This artist will be performing at " + response.data[i].venue.name + " on this date " + response.data[i].datetime);

        }
    }
);
// };

// function movieThis(){
// axios.get("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy").then(
//     function (response) {
//         for (var i = 0; i < response.data.length; i++) {
//             console.log(response.data[i]);
//         }

//     }
// );
// };









