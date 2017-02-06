'use strict';

var React = require('react');
var ReactBootstrap = require('../../../node_modules/react-bootstrap/dist/react-bootstrap.js');
var Table = ReactBootstrap.Table;
var Panel = ReactBootstrap.Panel;
var TaskList = require('./TaskList');

var TaskContainer = React.createClass({
    render: function() {
        return (    
            <section> 
                <Panel header={this.props.title} bsStyle="primary">
                    <TaskList/>
                </Panel>
            </section>
        );
    }
});

module.exports = TaskContainer;