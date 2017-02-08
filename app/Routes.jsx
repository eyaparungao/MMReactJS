'use strict';

var React = require('react');
var Router = require('react-router');
var Route = require('react-router').Route;
var Redirect =  require('react-router').Redirect;

var Layout = require('./components/Layout');
var About = require('./components/About');
var TaskContainer = require('./components/tasks/TaskContainer');
var TaskForm = require('./components/tasks/TaskForm');
var PageNotFound = require('./components/common/PageNotFound');

var routes = (
    <Route path="/" component={Layout}>
        <Route path="Tasks" component={TaskContainer} />
        <Route path="About" component={About} />
        <Route path="/404" component={PageNotFound} />
        <Redirect from="*" to="/404" />
    </Route>
);

module.exports = routes;