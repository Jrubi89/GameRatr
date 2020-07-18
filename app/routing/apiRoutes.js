let db = require('../models/')

module.exports = function(app) {
    app.get('/api/games', function(req, res) {
        db.games.findAll({}).then(function(results) {
            res.json(results)
        })
    })
}