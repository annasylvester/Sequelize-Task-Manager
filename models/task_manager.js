module.exports = function(sequelize, DataTypes) {
  let Task = sequelize.define('Task', {
    task_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Task;
};
