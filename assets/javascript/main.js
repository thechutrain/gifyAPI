    $("button").on("click", function() {
      // clear the gif container, so you don't keep adding
      $("#gifs-appear-here").empty();
      var animal = $(this).data("animal");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

        // console.log(response);

        // Step 2: since the image information is inside of the data key,
        // make a variable named results and set it equal to response.data
        var results = response.data;
        // console.log(results); // results is an array of objects, length 10

        // =============== put step 2 in between these dashes ==================

        // ========================

        for (var i = 0; i < results.length; i++) {
            // console.log(results[i]);
            // debugger
        // Step 3: uncomment the for loop above and the closing curly bracket below.
        // Make a div with jQuery and store it in a variable named animalDiv.
        var animalDiv = $("<div>");
        // Make a paragraph tag with jQuery and store it in a variable named p.
        var p = $("<p>");
        // Set the inner text of the paragraph to the rating of the image in results[i].
        p.text("Rating: " + results[i].rating);
        // Make an image tag with jQuery and store it in a variable named animalImage.
        // Set the image's src to results[i]'s fixed_height.url.
        var animalImage = $("<img>").attr("src", results[i].images.fixed_height.url)
                                    .attr("alt", "Animal image");
        // Append the p variable to the animalDiv variable.
        // Append the animalImage variable to the animalDiv variable.
        animalDiv.append(p)
                 .append(animalImage);
        // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
        $("#gifs-appear-here").prepend(animalDiv);

        // ============= put step 3 in between these dashes ======================

        // ==================================
        }

      });
    });