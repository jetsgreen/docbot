require("dotenv").config();

// variables

// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

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
                console.log("This artist will be performing at " + response.data[i].venue.name + " on this date " + response.data[i].datetime);
               
            }
        });
};


function movieThis(){
    if(!userInput) {
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

function doThis() {
var fs = require("fs");

fs.readFile("random.txt", "utf8", function(error, data) {


  if (error) {
    return console.log(error);
  }

  var dataArr = data.split(",");

//   spotifySong(dataArr[0], dataArr[1]);
  console.log(dataArr);
});
};







