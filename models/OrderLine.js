const Sequelize = require('sequelize'),
  sequelize = require('../db/connection.js');

const OrderLine = sequelize.define('OrderLine', {
  quantity: {
    type: DataTypes.INTEGER
  },
  orderId: {
    type: DataTypes.INTEGER
  },
  widgetId: {
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

module.exports = OrderLine;
