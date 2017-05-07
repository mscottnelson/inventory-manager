const Sequelize = require('sequelize'),
  sequelize = require('../db/connection.js');

const Order = sequelize.define('Order', {
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

module.exports = Order;
