'use strict';

var React = require('react');
var TaskListHeaderItem = require('./TaskListHeaderItem');

var TaskListHeaders = React.createClass({
    getInitialState: function() {
        return {
            activeSortKey: this.props.activeSortKey,
            columns: this.props.columns
        };
    },
    getDefaultProps: function() {
        return {
            title: "",            
            sortable: false,
            sortOrder: "ASC"
        };
    }, 
    handleHeaderClick: function(id, sortOrder) {
        this.props.onSetActiveSortKey(id);
        this.setState({ activeSortKey: id });
    },
    renderSortIcon: function() {
        if (this.props.sortable && this.state.activeSortKey) {
            if (this.props.sortOrder == "ASC") {
                return (
                    <i className="fa fa-sort-asc" style={{verticalAlign: "middle"}}></i>
                );
            } else {
                return (
                    <i className="fa fa-sort-desc" style={{verticalAlign: "middle"}}></i>
                );
            }
        }        
        return;
    }, 
    renderHeaderItems: function() {
        return this.state.columns.map(function(column) {            
            return (
                <TaskListHeaderItem 
                    className={column.className}
                    title={column.title} 
                    key={column.id}
                    id={column.id}
                    sortable={column.sortable}
                    activeSortKey={column.id == this.state.activeSortKey}
                    onHeaderClick={this.handleHeaderClick}/>
            );
        }, this);        
    },
    render: function() {
        return (    
            <tr>
                {this.renderHeaderItems()}
            </tr>
        );
    }
});

module.exports = TaskListHeaders;