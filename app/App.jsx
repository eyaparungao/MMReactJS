'use strict';

var React = require('react');
var ReactDOM = require ('react-dom');
var Router = require('react-router').Router;
var hashHistory = require("react-router").hashHistory;
var Routes = require("./Routes");

var TaskApi = require("./api/taskApi");
var About = require('./components/About');

var Style = require('../public/css/style.css');
var FontAwesome = require('font-awesome/css/font-awesome.css');
//require('../public/css/Bootstrap.css');

TaskApi.initializeTasks();
TaskApi.getAllTasks();

ReactDOM.render((
    <Router history={hashHistory}>
        {Routes}
    </Router>
), document.getElementById("app"));
