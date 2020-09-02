$(document).ready(function () {
  $.get("/api/games", function (results) {
    renderGameCards(results);
  });
  $("#search").click(function () {
    let query = $("#search-bar").val();

    $.get(`/${query}`, function (results) {
      renderGameCards(results);
    });
  });
  function renderGameCards(results) {
    $(".cards").empty();
    let newResults = _.groupBy(results, "game_name");
    let parsedResults = Object.entries(newResults);
    for (let i = 0; i < parsedResults.length; i++) {
      let gameCard = $("<div>");
      let title = $("<h1>").html(parsedResults[i][0]);
      let cover_art = $("<img>").attr("src", parsedResults[i][1][0].cover_art);
      let genre = $("<p>").html(`Genre: ${parsedResults[i][1][0].genre}`);
      let platArr = [];
      for (let j = 0; j < parsedResults[i][1].length; j++) {
        platArr.push(parsedResults[i][1][j].platform);
      }
      let platform = $("<p>").html(`Platform(s): ${platArr.join(", ")}`);
      gameCard.append(cover_art, title, genre, platform);
      $(".cards").append(gameCard);
    }
  }
});
