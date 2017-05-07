'use strict';

module.exports = function(sequelize, DataTypes) {
  var Widget = sequelize.define('Widget', {
    edition: {
      type: DataTypes.STRING
    },
    finish: {
      type: DataTypes.STRING
    },
    size: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.STRING
    },
    units: {
      type: DataTypes.STRING
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
    classMethods: {}
  });
  return Widget;
};
