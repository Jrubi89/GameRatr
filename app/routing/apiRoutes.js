let db = require("../models/");

module.exports = function (app) {
  app.get("/api/games", function (req, res) {
    db.games.findAll({ order: [["game_name"]] }).then(function (results) {
      res.json(results);
    });
  });

  app.get("/:query", function (req, res) {
    db.games
      .findAll({
        where: {
          game_name: { [db.Sequelize.Op.like]: `%${req.params.query}%` },
        },
      })
      .then(function (results) {
        res.json(results);
      });
  });

  app.get("/filter/:filter", function (req, res) {
    let filters = req.params.filter.split("+");
    const platformValues = ["PC", "Playstation", "Xbox", "Nintendo"];
    const genreValues = ["RPG", "Shooter", "Platform", "Strategy"];
    let platform = [];
    let genre = [];

    for (let i = 0; i < filters.length; i++) {
      if (platformValues.includes(filters[i])) {
        platform.push(filters[i]);
      } else if (genreValues.includes(filters[i])) {
        genre.push(filters[i]);
      }
    }

    if (filters[filters.length - 1] === "AZ") {
      filter(req, res, platform, genre, "ASC");
    } else {
      filter(req, res, platform, genre, "DESC");
    }
  });

  app.post("/add/game", function (req, res) {
    for (let i = 0; i < req.body.platform.length; i++) {
      db.games.create({
        cover_art: req.body.cover_art,
        game_name: req.body.game_name,
        platform: req.body.platform[i],
        genre: req.body.genre,
      });
    }
    res.send("Game added");
  });
};

function filter(req, res, platform, genre, order) {
  if (platform.length === 0 && genre.length === 0) {
    db.games
      .findAll({ order: [["game_name", order]] })
      .then(function (results) {
        res.json(results);
      });
  } else if (platform.length > 0 && genre.length === 0) {
    db.games
      .findAll({
        order: [["game_name", order]],
        where: { platform: [platform] },
      })
      .then(function (results) {
        res.json(results);
      });
  } else if (genre.length > 0 && platform.length === 0) {
    db.games
      .findAll({ order: [["game_name", order]], where: { genre: [genre] } })
      .then(function (results) {
        res.json(results);
      });
  } else {
    console.log("both");
    db.games
      .findAll({
        order: [["game_name", order]],
        where: { platform: [platform], genre: [genre] },
      })
      .then(function (results) {
        res.json(results);
      });
  }
}
