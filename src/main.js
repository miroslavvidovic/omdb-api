function searchMovie(){
    var title = $("#title").val();
    var year = $("#year").val();
    console.log(title, year);

    var plusTitle = title.replace(" ", "+");

    console.log(plusTitle);

    $.getJSON("http://www.omdbapi.com/?t="+title+"&y="+year+"&plot=short&r=json",
        function( data ) {
            console.log(data);
            var items = [];
            $.each( data, function( key, val ) {
                items.push( "<li id='" + key + "'>" + val + "</li>" );
        });

      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );
    });
}


