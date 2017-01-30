'use strict';

var React = require('react');
var ReactBootstrap = require('../../node_modules/react-bootstrap/dist/react-bootstrap.js');

var TaskList = require('./TaskList.jsx');

var Body = React.createClass({
    render: function() {
        return (   
            <TaskList title="Task Master List" columns={this.props.columns} data={this.props.data}/> 
        );
    }
});

module.exports = Body;