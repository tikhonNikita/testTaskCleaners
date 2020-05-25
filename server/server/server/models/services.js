module.exports = (sequelize, DataTypes) => {
  const Services = sequelize.define('Services', {
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    dryerId: DataTypes.NUMBER,
  });

  Services.associate = (models) => {
    Services.belongsTo(models.Dryers, {
      onDelete: 'CASCADE',
      foreignKey: 'dryerId',
    });
  };

  Services.associate = (models) => {
    Services.hasMany(models.Orders, {
      foreignKey: 'serviceId',
      as: 'posts',
    });
  };


  return Services;
};
