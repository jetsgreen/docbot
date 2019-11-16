# docbot

# Introduction to my Liri app:

-LIRI is a command line node app, and is a Language Interpretation and Recognition Interface.This application takes in the user's input under different parameters.  These parameters include searches for movies, concerts, and songs.  It also has certain defaults if the user does not make a choice.

# Application Set-up:

-I started this project by creating and cloning a repository. Then I installed a number of  packages through the npm command.  These packages include Node-Spotify-API, Axios, Moment and DotEnv. Then I proceeded to the root of my file and I did and npm init -y to ceate a package.json for the project.  The package.json file is required for installing third party npm packages and saving their version numbers. After that I proceeded to created the liri.js and keys.js files.  The liri.js is the main javascript file, and the keys.js has the spotify api.  I called on the keys.js file from liri.js by doing require, then the file location. I also created a ramdom.txt and .env files.  The random.txt file contains the title of the song "I wanted that way", and the .env contains the ID and the Secret key and obtained from the spotify page.  

# Instruction on how to run the application:

-The user can start the app by choosing one of the three main options, which are: concert-this, movie-this, spotify-this song.  Concert-this will display the name of the venue, the venue location and time and date of the event.  

-Movie-this will display the Title of the movie, year the movie came out, the IMDB Rating of the movie, the  country where the movie was produced, language of the movie, Plot of the movie and the actors in the movie. 

-The spotify-this-song option, once the user inputs the name of a song, it will display the artist who plays the song the song's name, a preview link of the song from spotify and the name of the album. This app also has certain defaults if the user does not input a value.  For the movie option it will display the movie Mr. Nobody.  And if the user does not input a song for the spotify-this-song option the song The Sign will display.  Furthermore the app has a do-what-it-says option.  This will populate the info in the .env file.

