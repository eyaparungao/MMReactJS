'use strict';

var React = require('react');
var ReactBootstrap = require('../../../node_modules/react-bootstrap/dist/react-bootstrap.js');
var Panel = ReactBootstrap.Panel;
var Router = require('react-router');
var Link = Router.Link;

var priorityEnum = require("../../enums/priorityEnum");
var statusEnum = require("../../enums/statusEnum");
var TaskApi = require("../../api/taskApi");

var InputText = require("../controls/InputText");
var TextArea = require("../controls/TextArea");
var DropDownList = require("../controls/DropDownList");

var TaskForm = React.createClass({
    getInitialState: function() {
        return {
            task: {
                taskId: 0,
                name: "",
                description: "",
                priority: 1,
                status: 1
            }
        };
    },
    handleSaveTask: function() {
        TaskApi.saveTask(this.state.task);
        this.props.onCancelTask();
    },
    setTaskState: function(event) {
        if (event.target.nodeName === "SELECT") {
            this.state.task[event.target.name] = Number(event.target.value);
        } else {
            this.state.task[event.target.name] = event.target.value;
        }
        this.setState({ task: this.state.task })
    },
    render: function() {
        return (    
            <section className="task-form"> 
                <Panel header="Add New Task" bsStyle="info">
                    <div>
                        <InputText 
                            name="name"
                            placeholder="Task Name"
                            label="Task Name"
                            className="task-name"
                            value={this.state.task.name}
                            onChange={this.setTaskState}/>
                    </div>
                    <div>
                        <TextArea 
                            name="description"
                            placeholder="Description"
                            className="task-description"
                            value={this.state.task.description}
                            onChange={this.setTaskState}/>
                    </div>
                    <div>
                        <DropDownList 
                            name="status"
                            defaultValue={this.state.task.status}
                            items={statusEnum.getAllStatuses()} 
                            onChange={this.setTaskState}/>
                    </div>
                    <div>
                    <DropDownList 
                        name="priority"
                        defaultValue={this.state.task.priority}
                        items={priorityEnum.getAllPriorities()} 
                        onChange={this.setTaskState}/>
                    </div>
                    <br/>
                    <div className="btn-group">
                        <button 
                            title="Save Task"
                            onClick={this.handleSaveTask}>
                            Save
                        </button>&nbsp;
                        <button 
                            title="Cancel"
                            onClick={this.props.onCancelTask}>
                            Cancel
                        </button>
                    </div>
                </Panel>
            </section>
        );
    }
});

module.exports = TaskForm;