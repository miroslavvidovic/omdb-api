function searchMovie(){
    var title = $("#title").val();
    var year = $("#year").val();
    console.log(title, year);

    var plusTitle = title.replace(" ", "+");

    console.log(plusTitle);

    $.getJSON("http://www.omdbapi.com/?t="+title+"&y="+year+"&plot=full&r=json",
        function( data ) {
            console.log(data);

            var template = $('#movie').html();
            Mustache.parse(template);   // optional, speeds up future uses
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
            // var items = [];
            // $.each( data, function( key, val ) {
            //     items.push( "<li id='" + key + "'>" + val + "</li>" );
            // });

            // $( "<ul/>", {
            //     "class": "my-new-list",
            //     html: items.join( "" )
            // }).appendTo( "body" );
        }
    );
}
