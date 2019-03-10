$(document).ready(function() {  

var tvShows = ["The Office", "Parks and Recreation", "New Girl", "South Park", "Bob's Burgers", "Crazy Ex-Girlfriend", "The Good Place", "Seinfeld", "Friends", "It's Always Sunny In Philadelphia", "The Big Bang Theory", "30 Rock", "Community", "Rick and Morty", "Adventure Time", "Archer", "Arrested Development"];

var number = 10;

var tvGifNumber = "";

function displayGifs() {
    $("#gifs-view").empty();
    var tvGif = $(this).attr("data-name");
    tvGifNumber = tvGif;
    console.log(tvGifNumber);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvGif + "&api_key=UC1ZPXs6ERCkzy8RRSMRQTEGuv0FMQhf";
    console.log(tvGif);

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

        var gifDiv = $("<div>");
        gifDiv.addClass("gifs-wrap")

        for (i = 0; i < number; i++) {

        var containingDiv = $("<div>")
        containingDiv.addClass("mx-2 mb-4")

            var rating = response.data[i].rating;
            var gRating = $("<div>");
            gRating.text("Rating: " + rating);
            containingDiv.append(gRating);

            var gGif = $("<img>");
            gGif.attr("src", response.data[i].images.fixed_height_still.url);
            gGif.attr("data-still", response.data[i].images.fixed_height_still.url);
            gGif.attr("data-animate", response.data[i].images.fixed_height.url);
            gGif.attr("data-state", "still");
            gGif.attr("alt", tvGif + " Gif " + (i+1));
            gGif.addClass("gif");
            containingDiv.append(gGif);

            gifDiv.append(containingDiv);

        }

        $("#gifs-view").prepend(gifDiv);

    });

};

function displayEmptyGifs() {
    $("#gifs-view").empty();
    var tvGif = tvGifNumber;
    // tvGifNumber = tvGif;
    // console.log(tvGifNumber);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvGif + "&api_key=UC1ZPXs6ERCkzy8RRSMRQTEGuv0FMQhf";
    console.log(tvGif);

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

        var gifDiv = $("<div>");
        gifDiv.addClass("gifs-wrap")

        for (i = 0; i < number; i++) {

        var containingDiv = $("<div>")
        containingDiv.addClass("mx-2 mb-4")

            var rating = response.data[i].rating;
            var gRating = $("<div>");
            gRating.text("Rating: " + rating);
            containingDiv.append(gRating);

            var gGif = $("<img>");
            gGif.attr("src", response.data[i].images.fixed_height_still.url);
            gGif.attr("data-still", response.data[i].images.fixed_height_still.url);
            gGif.attr("data-animate", response.data[i].images.fixed_height.url);
            gGif.attr("data-state", "still");
            gGif.attr("alt", tvGif + " Gif " + (i+1));
            gGif.addClass("gif");
            containingDiv.append(gGif);

            gifDiv.append(containingDiv);


        }

        $("#gifs-view").prepend(gifDiv);

    });

};


function empty() {
    $("#gifs-view").empty();
};


//Generates the buttons
function genButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < tvShows.length; i++) {
        var a = $("<button>");
        a.addClass("tv btn btn-primary m-1");
        a.attr("data-name", tvShows[i]);
        a.text(tvShows[i]);
        $("#buttons-view").append(a);
    }

    var b = $("<button>");
    b.addClass("clear btn btn-danger m-1");
    b.text("Clear");
    $("#buttons-view").append(b);
};

$("#add-tv").on("click", function(event){
    event.preventDefault();
    var tv = $("#tv-input").val().trim();

    tvShows.push(tv);

    genButtons();

});

$("#change-numbers").on("click", function(event){
    event.preventDefault();
    number = $("#how-many-input").val();

    if (number < 26) {
        displayEmptyGifs();
    }

    // prevents nothing showing-up if user selects more than 25 gifs
    else {
        number = 25;
        displayEmptyGifs();
    }

    

});

$(document).on("click", ".gif", function() {
    var state = $(this).attr("data-state");
    console.log("Look!" + this);

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }

    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

})

$(document).on("click", ".tv", displayGifs);

$(document).on("click", ".clear", empty);


genButtons();

});
