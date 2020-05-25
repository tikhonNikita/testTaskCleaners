module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    restoreCode: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Orders, {
      foreignKey: 'dryerId',
      as: 'posts',
    });
  };

  return User;
};
