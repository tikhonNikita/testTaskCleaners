module.exports = (sequelize, DataTypes) => {
  const Dryers = sequelize.define('Dryers', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    images: DataTypes.STRING,
    servicesDescription: DataTypes.STRING,
  });

  Dryers.associate = (models) => {
    Dryers.hasMany(models.Services, {
      foreignKey: 'dryerId',
      as: 'posts',
    });
  };

  Dryers.associate = (models) => {
    Dryers.hasMany(models.Orders, {
      foreignKey: 'dryerId',
      as: 'posts',
    });
  };

  return Dryers;
};
