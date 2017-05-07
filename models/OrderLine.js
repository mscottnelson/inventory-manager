'use strict';

module.exports = function(sequelize, DataTypes) {
  var OrderLine = sequelize.define('OrderLine', {
    quantity: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  }, {
    instanceMethods: {
      markForRemoval: function() {
        return this.destroy();
      }
    },
    classMethods: {
      associate: function(models) {
        OrderLine.belongsTo(models.Order);
        OrderLine.hasMany(models.Widget);
      }
    }
  });
  return OrderLine;
};
