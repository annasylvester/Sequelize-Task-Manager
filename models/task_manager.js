module.exports = function (sequelize, DataTypes) {
  let Task = sequelize.define('Task', {
    task_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdAt'
    },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   field: 'updatedAt'
    // }
  });

  return Task;
};