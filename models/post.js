module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("post", 
  {

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
    
  });
  return Post;
};