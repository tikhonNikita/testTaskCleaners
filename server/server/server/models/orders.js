module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    price: DataTypes.NUMBER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dryerId: DataTypes.NUMBER,
    serviceId: DataTypes.NUMBER,
    userId: DataTypes.NUMBER,
    date: DataTypes.DATE,
    status: DataTypes.STRING,
    returnDescription: DataTypes.STRING,
  });

  Orders.associate = (models) => {
    Orders.belongsTo(models.Dryers, {
      onDelete: 'CASCADE',
      foreignKey: 'dryerId',
    });
  };

  Orders.associate = (models) => {
    Orders.belongsTo(models.Services, {
      onDelete: 'CASCADE',
      foreignKey: 'serviceId',
    });
  };

  Orders.associate = (models) => {
    Orders.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: 'userId',
    });
  };

  return Orders;
};
