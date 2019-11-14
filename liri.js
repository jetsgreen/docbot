require("dotenv").config();

// variables

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var moment = require("moment");
moment().format();

var axios = require("axios");
var userInput = process.argv[3];
var userOption = process.argv[2];

switch (userOption) {
    case "concert-this":
        concertThis(userInput);
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
function concertThis(userInput) {



    axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(

        function (response) {
            console.log(response.data);
            console.log(userInput)
            for (var i = 0; i < response.data.length; i++) {
                console.log("========================================================================================");
                console.log("This artist will be performing at " + response.data[i].venue.name);
                console.log("They will be performing on this date: " + response.data[i].datetime);
                console.log(response.data[i].venue.city);

            }
        });
};


function movieThis() {
    if (!userInput) {
        userInput === "Mr. Nobody";
    };
    var movieQueryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy"
    axios.get(movieQueryUrl).then(
        function (response) {
            // for (var i = 0; i < response.data.length; i++) {
            console.log("========================================================================================")
            console.log("The " + userInput + " came out in the year: " + response.data.Year);
            console.log("Imdb Rating: " + response.data.imdbRating);
            console.log("The plot of the movie: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("Language: " + response.data.Language);
            console.log("This movie was produced in: " + response.data.Country);
            // }


        });

};

function spotifySong() {

    if (!userInput) {
        userInput === "The Sign";
    };
    spotify.search({ type: "track", query: userInput }).then(function (response) {
        for (var i = 0; i < 1; i++) {
            console.log("---------------------------------------------------------")
            console.log("Name of the song " + response.tracks.items[i].name);
            console.log("Name of the artist " + response.tracks.items[i].artists[0].name);
            console.log("Album's name " + response.tracks.items[i].album.name)
            console.log("Song's Preview on Spotify " + response.tracks.items[i].preview_url);
        }
    });
};

function doThis() {
    var fs = require("fs");

    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }

        var dataArr = data.split(",");

        console.log(dataArr);
    });
};







