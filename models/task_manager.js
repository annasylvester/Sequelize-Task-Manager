module.exports = function(sequelize, DataTypes) {
  let Task = sequelize.define("Task", {
    // Giving the Author model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Task;
};
