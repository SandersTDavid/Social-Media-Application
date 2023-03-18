module.exports = (sequelize, DataTypes) => {
    const Likes = sequelize.define("Likes", {
// Nothing needed as it is associated to posts
    })
    return Likes;
    };