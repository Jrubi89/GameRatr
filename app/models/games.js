module.exports = function(sequelize, DataTypes) {
    let Game = sequelize.define('games', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cover_art: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        game_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        platform: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return Game;
}