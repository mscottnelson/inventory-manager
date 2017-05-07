import React, { Component } from 'react';
import { WidgList } from './WidgList';
import { WidgCount } from './WidgCount';
import { AddNewWidget } from './AddNewWidget';
// import { AddOrderForm } from './AddOrderForm';
import { Menu } from './Menu';
//const dummy = require('../../assets/dummy/testWidgets.json');
const dummy = [
  "1": {
    "edition": "Budget",
    "finish": "Matte",
    "size": 4,
    "price": 0.23,
    "units": 4,
    "createdAt": "2017-05-07",
    "updatedAt": "2017-05-07"
  },
  "2": {
    "edition": "Extreme",
    "finish": "Chrome",
    "size": 9,
    "price": 13000,
    "units": 1,
    "createdAt": "2017-05-07",
    "updatedAt": "2017-05-07"
  },
  "3": {
    "edition": "Standard",
    "finish": "Gold",
    "size": 1,
    "price": 124.23,
    "units": 40,
    "createdAt": "2017-05-07",
    "updatedAt": "2017-05-07"
  },
  "4": {
    "edition": "Prime",
    "finish": "Matte",
    "size": 4,
    "price": 21,
    "units": 3,
    "createdAt": "2017-05-07",
    "updatedAt": "2017-05-07"
  },
  "5": {
    "edition": "Prime",
    "finish": "Distressed",
    "size": 3,
    "price": 10.23,
    "units": 500,
    "createdAt": "2017-05-07",
    "updatedAt": "2017-05-07"
  },
  "6": {
    "edition": "Elite",
    "finish": "Red",
    "size": 6,
    "price": 56,
    "units": 2,
    "createdAt": "2017-05-07",
    "updatedAt": "2017-05-07"
  }
];

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allWidgets: dummy,
      filter: false
    }
  }

  countTypes(filter) {
    const { allWidgets } = this.state;
    return allWidgets.filter((wigd) => (filter) ? wigd[filter] : wigd).length;
  }

  displayAvailable(filter){
    //TODO: brag currently available finishes, editions, size range, lowest cost
  }

  currentWeight() {
    const { allWidgets } = this.state;
    return allWidgets[allWidgets.length - 1].weight;
  }

  render() {
    return(
      			<div className="app">
              <h1>Widg</h1>
              <h2>The Uber of Widgets</h2>
              <Menu />
              {
                (this.props.location.pathname === "/") ?
                  <WidgCount total={this.countTypes()}
                    finish={this.countTypes("finish")}
                    size={this.countTypes("size")}
                    cost={this.countTypes("cost")}
                    edition={this.countTypes("edition")}
                  /> :
                (this.props.location.pathname === "/add-widget") ?
                  <AddNewWidget /> :
                <WidgList widgets={this.state.allWidgets}
                  filter={this.props.params.filter}/>
              }
      			</div>
    )
  }
}
