var React = require('react');
var ReactBootstrap = require('../../node_modules/react-bootstrap/dist/react-bootstrap.js');
var Table = ReactBootstrap.Table;

var TaskList = React.createClass({
    renderColumnHeaders: function() {
        var columns = this.props.columns.map(function(column) {
            return <th key={column.columnId}> {column.label} </th>;
        });
        
        return <tr>{ columns }</tr>;
    },
    renderTasks: function() {
        return this.props.data.map(function(task) {
            return (
                <tr key = {task.taskId}>
                    <td>
                        <div>{task.name}</div>
                        <div>{task.description}</div>
                    </td>
                    <td>{task.priority}</td>
                    <td>{task.statusId}</td>
                </tr>
            );
        });
    },
    render: function() {
        return (   
            <Table striped bordered condensed hover>
                <thead>{ this.renderColumnHeaders() }</thead>
                <tbody>{ this.renderTasks() }</tbody>
            </Table>
        );
    }
});

module.exports = TaskList;