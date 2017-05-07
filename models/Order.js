'use strict';

module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
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
    classMethods: {}
  });
  return Order;
};
