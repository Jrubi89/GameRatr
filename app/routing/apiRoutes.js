let db = require('../models/')

module.exports = function(app) {
    app.get('/api/games', function(req, res) {
        db.games.findAll({}).then(function(results) {
            res.json(results)
        })
    })

    app.get('/:query', function(req, res) {
        db.games.findOne({where: {game_name: req.params.query}}).then(function(results) {
            res.json(results)
        })
    })
}