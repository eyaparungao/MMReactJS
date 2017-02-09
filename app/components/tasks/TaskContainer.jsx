'use strict';

var React = require('react');
var ReactBootstrap = require('../../../node_modules/react-bootstrap/dist/react-bootstrap.js');
var Table = ReactBootstrap.Table;
var Panel = ReactBootstrap.Panel;
var TaskApi = require("../../api/taskApi");
var TaskList = require('./TaskList');

var columns = [{
        id: 1,
        title: "Task Details",
        sortField: "name",
        className: "task-header col-lg-4",
        sortable: true
    }, {
        id: 2,
        title: "Priority",
        sortField: "priority",
        className: "task-header col-lg-2",
        sortable: true
    }, {
        id: 3,
        title: "Status",
        sortField: "status",
        className: "task-header col-lg-2",
        sortable: true
    }, {
        id: 4,
        title: "",
        className: "task-header col-lg-1",
        sortable: false
    }
];


var TaskContainer = React.createClass({
    render: function() {
        return (    
            <section> 
                <Panel header={this.props.title} bsStyle="primary">
                    <TaskList 
                        data={TaskApi.getAllTasks()}
                        columns={columns}/>
                </Panel>
            </section>
        );
    }
});

module.exports = TaskContainer;