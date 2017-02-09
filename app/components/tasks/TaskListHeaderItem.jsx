'use strict';

var React = require('react');
var ReactBootstrap = require('../../../node_modules/react-bootstrap/dist/react-bootstrap.js');

var TaskListHeaderItem = React.createClass({
    getDefaultProps: function() {
        return {
            title: "",            
            sortable: false,
            sortOrder: "ASC"
        };
    }, 
    getInitialState: function() {
        return {
            sortOrder: this.props.sortOrder
        }
    },
    handleColumnHeaderClick: function(id) {
        var sortDirection = ""
          if (this.props.sortable && this.props.activeSortKey) {
            if (this.state.sortOrder === "ASC") {
                sortDirection = "DESC";
            } else {
                sortDirection = "ASC";
            }
            this.setState({ sortOrder: sortDirection });
        }
        this.props.onHeaderClick(id, sortDirection);
    },
    renderSortIcon: function() {
        if (this.props.sortable && this.props.activeSortKey) {
            if (this.state.sortOrder == "ASC") {
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
    render: function() {
        return (    
            <th 
                style={{textAlign: "center"}}
                onClick={this.handleColumnHeaderClick.bind(this, this.props.id)}>                    
                <span>{this.props.title} </span>
                {this.renderSortIcon()}
            </th>
        );
    }
});

module.exports = TaskListHeaderItem;