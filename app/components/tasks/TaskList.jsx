'use strict';

var React = require('react');
var ReactBootstrap = require('../../../node_modules/react-bootstrap/dist/react-bootstrap.js');
var Table = ReactBootstrap.Table;
var Panel = ReactBootstrap.Panel;
var Modal = ReactBootstrap.Modal;
var TaskApi = require("../../api/taskApi");
var TaskForm = require('./TaskForm');
var TaskListItem = require('./TaskListItem');
var TaskListHeaders = require('./TaskListHeaders');
var TaskListHeaderItem = require('./TaskListHeaderItem');

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

var TaskList = React.createClass({    
    getInitialState: function() {
        return {
            tasks: TaskApi.getAllTasks(),
            showModal: false,
            sortKey: "name",
            sortDirection: "ASC",
            columns: columns,
            activeSortKey: 1
        }
    },
    handleDeleteTask: function(taskId) {
        if (taskId) {
            TaskApi.deleteTask(taskId);
            this.handleUpdateAllTasks();
        }
    },
    handleUpdateAllTasks: function() {
        this.setState({ tasks: TaskApi.getAllTasks() });
    },
    handleOpenModal: function() {
        this.setState({ showModal: true });
    },
    handleCloseModal: function() {
        this.setState({ showModal: false });
        this.handleUpdateAllTasks();
    },
    setActiveSortKey: function(id) {
        this.setState({ activeSortKey: id });
        this.sortTasks(id);
    },
    sortTasks: function(id) {
        var sortField = "";
        for (var i = 0; i < this.state.columns.length; i++) {
            if (this.state.columns[i].id == id && this.state.columns[i].sortable) {
                sortField = this.state.columns[i].sortField;
                break;
            }
        }
        if (sortField != "") {
            var sortDirection = this.state.sortDirection;
            var sortedTasks = this.state.tasks.sort(function(a, b) {
                if (sortDirection === "ASC") {
                    return (a[sortField] > b[sortField]) ? 1 : ((a[sortField] < b[sortField]) ? -1 : 0);
               } else {
                   return (b[sortField] > a[sortField]) ? 1 : ((b[sortField] < a[sortField]) ? -1 : 0);
               }
            });
            this.setState({ tasks: sortedTasks });
        }
    },
    renderTasks: function() {
        return this.state.tasks.map(function(task) {
            return (
                <TaskListItem
                    key={task.taskId}
                    task={task}
                    onDeleteTask={this.handleDeleteTask.bind(this, task.taskId)}  />
            );
        }, this);
    },
    render: function() {
        return (    
            <section> 
                <Panel header="Task Master List" bsStyle="primary">
                    <Table striped bordered condensed hover>
                        <thead>
                            <TaskListHeaders 
                                columns={this.state.columns} 
                                activeSortKey={this.state.activeSortKey}
                                onSetActiveSortKey={this.setActiveSortKey} />
                        </thead>
                        <tbody>{ this.renderTasks() }</tbody>
                    </Table>
                    <div>
                        <button onClick={this.handleOpenModal}>Add New Task</button>
                    </div>
                    <Modal show={this.state.showModal} >
                        <TaskForm
                            onCancelTask={this.handleCloseModal}/>
                    </Modal>
                </Panel>
            </section>
        );
    }
});

module.exports = TaskList;