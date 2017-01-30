'use strict';

var React = require('react');
var ReactDOM = require ('react-dom');
var Router = require('react-router');
var Route = require('react-router').Route;
// var Link = Router.Link;
// var RouteHandler = Router.RouteHandler;
// var DefaultRoute = Router.DefaultRoute;

var Bootstrap = require('../node_modules/bootstrap/dist/js/bootstrap.js');
var ReactBootstrap = require('../node_modules/react-bootstrap/dist/react-bootstrap.js');

var App = require('./components/App.jsx');
var About = require('./components/About.jsx');

require('../public/css/style.css');
//require('../public/css/Bootstrap.css');

var columns = [
    { columnId: 'taskDetails', label: 'Task Details' },
    { columnId: 'priority', label: 'Priority' },
    { columnId: 'status', label: 'Status' }
];

var datasource = [{
  taskId: 1,
  name: "TaskName1",
  description: "This is Task # 1",
  priority: 1,
  statusId: "ToDo"
},{
  taskId: 2,
  name: "TaskName2",
  description: "This is Task # 2",
  priority: 3,
  statusId: "InProgress"
},{
  taskId: 3,
  name: "TaskName3",
  description: "This is Task # 3",
  priority: 2,
  statusId: "Done"
}];

ReactDOM.render(<App columns={columns} data={datasource} />, document.getElementById('app'));
