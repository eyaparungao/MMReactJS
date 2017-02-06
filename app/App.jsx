'use strict';

var React = require('react');
var ReactDOM = require ('react-dom');
var Router = require('react-router').Router;
var TaskApi = require("./api/taskApi");

var Bootstrap = require('../node_modules/bootstrap/dist/js/bootstrap.js');
var ReactBootstrap = require('../node_modules/react-bootstrap/dist/react-bootstrap.js');
var hashHistory = require("react-router").hashHistory;
var Routes = require("./Routes");

var About = require('./components/About');

require('../public/css/style.css');
//require('../public/css/Bootstrap.css');

TaskApi.initializeTasks();
TaskApi.getAllTasks();

ReactDOM.render((
    <Router history={hashHistory}>
        {Routes}
    </Router>
), document.getElementById("app"));
