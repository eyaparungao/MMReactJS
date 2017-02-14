import React, { Component } from 'react';
import { Table, Panel, Modal } from '../../../node_modules/react-bootstrap/dist/react-bootstrap.js';
import TaskForm from './TaskForm';
import TaskListHeaders from './TaskListHeaders';
import TaskListItem from './TaskListItem';
import TaskApi from '../../api/taskApi';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: props.data,
            showModal: false,
            sortKey: "name",
            sortDirection: "ASC",
            columns: this.props.columns,
            activeSortKey: 1
        }
    }

    handleDeleteTask(taskId) {
        if (taskId) {
            TaskApi.deleteTask(taskId);
            this.handleUpdateAllTasks();
        }
    }

    handleUpdateAllTasks() {
        this.setState({ tasks: TaskApi.getAllTasks() });
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
        this.handleUpdateAllTasks();
    }

    setActiveSortKey(id, sortOrder) {
        this.setState({ activeSortKey: id });
        this.sortTasks(id, sortOrder);
    }

    sortTasks(id, sortOrder) {
        let sortField = "";
        for (let i = 0; i < this.state.columns.length; i++) {
            if (this.state.columns[i].id == id && this.state.columns[i].sortable) {
                sortField = this.state.columns[i].sortField;
                break;
            }
        }
        if (sortField != "") {
            let sortedTasks = this.state.tasks.sort(function(a, b) {
                if (sortOrder === "ASC" || sortOrder === "") {
                    return (a[sortField] > b[sortField]) ? 1 : ((a[sortField] < b[sortField]) ? -1 : 0);
               } else {
                   return (b[sortField] > a[sortField]) ? 1 : ((b[sortField] < a[sortField]) ? -1 : 0);
               }
            });
            this.setState({ tasks: sortedTasks });
        }
    }

    renderTasks() {
        //TODO
        return this.state.tasks.map(function(task) {
            return (
                <TaskListItem
                    key={task.taskId}
                    task={task}
                    onDeleteTask={this.handleDeleteTask.bind(this, task.taskId)}  />
            );
        }, this);
    }

    render() {
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
                        <TaskForm onCancelTask={this.handleCloseModal}/>
                    </Modal>
                </Panel>
            </section>
        );
    }
}