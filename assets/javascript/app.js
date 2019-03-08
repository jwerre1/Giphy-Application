var tvShows = ["The Office", "Parks and Recreation", "New Girl", "South Park", "Bob's Burgers", "Crazy Ex-Girlfriend", "The Good Place", "Seinfeld", "Friends", "It's Always Sunny In Philadelphia", "The Big Bang Theory", "The Goldbergs", "Community", "Rick and Morty", "Adventure Time", "Archer", "Arrested Development"];


function displayGifs() {
    $("#gifs-view").empty();
    var tvGif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvGif + "&api_key=UC1ZPXs6ERCkzy8RRSMRQTEGuv0FMQhf&limit=10";
    console.log(tvGif);

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

        var gifDiv = $("<div>");

        for (i = 0; i < 10; i++) {

            var rating = response.data[i].rating;
            var gRating = $("<p>");
            gRating.text("Rating: " + rating);
            gifDiv.append(gRating);

            var gGif = $("<img>");
            gGif.attr("src", response.data[i].images.fixed_height.url);
            gifDiv.append(gGif);

        }

        $("#gifs-view").prepend(gifDiv);

    });

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
};

$("#add-tv").on("click", function(event){
    event.preventDefault();
    var tv = $("#tv-input").val().trim();

    tvShows.push(tv);

    genButtons();

});

$(document).on("click", ".tv", displayGifs);

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=friends&api_key=UC1ZPXs6ERCkzy8RRSMRQTEGuv0FMQhf&limit=5";

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);

// });

genButtons();