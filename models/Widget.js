const Sequelize = require('sequelize'),
  sequelize = require('../db/connection.js');

const Widget = sequelize.define('Widget', {
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

module.exports = Widget;
