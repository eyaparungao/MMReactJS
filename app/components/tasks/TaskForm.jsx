import React, { Component } from 'react';
import Router, { Link } from 'react-router';
import ReactBootstrap, { Panel } from '../../../node_modules/react-bootstrap/dist/react-bootstrap.js'
import InputText from "../controls/InputText";
import TextArea from "../controls/TextArea";
import DropDownList from "../controls/DropDownList";
import TaskApi from '../../api/taskApi';
import priorityEnum from "../../enums/priorityEnum";
import statusEnum from "../../enums/statusEnum";

export default class TaskForm extends Component {
    constructor() {
        super();
        this.state = {
            task: {
                taskId: 0,
                name: '',
                description: '',
                priority: 1,
                status: 1
            }
        };
    }
    
    handleSaveTask() {
        TaskApi.saveTask(this.state.task);
        this.props.onCancelTask();
    }

    renderPriority() {
        const priorityAttributes = {
            name: 'priority',
            defaultValue: this.state.task.priority,
            items: priorityEnum.getAllPriorities(),
            onChange: this.setTaskState
        };
        return (
            <div 
                className="form-group"
                style={{textAlign: "left"}}>
                <label htmlFor="priority">Priority: </label>&nbsp;
                <DropDownList { ...priorityAttributes }/>
            </div>
        );
    }

    renderSaveCancelButtons() {
        return (
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
        );
    }

    renderStatus() {        
        const statusAttributes = {
            name: 'status',
            defaultValue: this.state.task.status,
            items: statusEnum.getAllStatuses(),
            onChange: this.setTaskState
        };
        return (
            <div 
                className="form-group"                        
                style={{textAlign: "left"}}>
                <label htmlFor="status">Status: </label>&nbsp;
                <DropDownList { ...statusAttributes } />
            </div>
        );
    }

    renderTaskDescription() {
        const taskDescriptionAttributes = {
            name: 'description',
            placeholder: 'Description',
            className: 'task-description',
            value: this.state.task.description,
            onChange: this.setTaskState
        };
        return (
            <div 
                className="form-group"
                style={{textAlign: "left"}}>
                <label htmlFor="description">Description: </label>&nbsp;
                <TextArea { ...taskDescriptionAttributes } />
            </div>
        );
    }

    renderTaskName() {
        const taskNameAttributes = {
            name: 'name',
            placeholder: 'Task Name',
            label: 'Task Name',
            className: 'task-name',
            value: this.state.task.name, 
            onChange: this.setTaskState
        };
        return (
            <div
                className="form-group"
                style={{textAlign: "left"}}>
                <label htmlFor="name">Task Name: </label>&nbsp;
                <InputText { ...taskNameAttributes } />
            </div>
        );
    }

    setTaskState(event) {
        if (event.target.nodeName === "SELECT") {
            this.state.task[event.target.name] = Number(event.target.value);
        } else {
            this.state.task[event.target.name] = event.target.value;
        }
        this.setState({ task: this.state.task })
    }
    
    render() {
        

        return (    
            <section className="task-form"> 
                <Panel 
                    header="Add New Task" 
                    bsStyle="info">
                    { this.renderTaskName() }
                    { this.renderTaskDescription() }
                    { this.renderStatus() }
                    { this.renderPriority() }
                    <br/>
                    { this.renderSaveCancelButtons() }
                </Panel>
            </section>
        );
    }
}