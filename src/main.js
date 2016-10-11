function searchMovie(){
    var title = $("#title").val();
    var year = $("#year").val();
    console.log(title, year);

    // Substitute whitespaces with + signs for api use
    var plusTitle = title.replace(" ", "+");

    $.getJSON("http://www.omdbapi.com/?t="+title+"&y="+year+"&plot=full&r=json",
        function( data ) {
            console.log(data.Response);

            // Check if the response is True and set the response ta a boolean so
            // it can be used in mustache templates
            if (data.Response == "True") {
                data.Response = true;
            } else {
                data.Response = false;
            }

            var template = $('#movie').html();
            Mustache.parse(template);
            var rendered = Mustache.render(template,
                {
                    title: data.Title,
                    year: data.Year,
                    rated: data.Rated,
                    released: data.Released,
                    runtime: data.Runtime,
                    genre: data.Genre,
                    director: data.Director,
                    writer: data.Writer,
                    actors: data.Actors,
                    plot: data.Plot,
                    language: data.Language,
                    country: data.Country,
                    awards: data.Awards,
                    poster: data.Poster,
                    metascore: data.Metascore,
                    imdbscore: data.imdbRating,
                    imdbvotes: data.imdbVotes,
                    imdbid: data.imdbID,
                    type: data.Type,
                    response: data.Response
                });
            $('#searchResult').html(rendered);
        }
    );
}
