'use strict';

var React = require('react');
var ReactBootstrap = require('../../node_modules/react-bootstrap/dist/react-bootstrap.js');

var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var PageHeader = ReactBootstrap.PageHeader;

var Header = React.createClass({
    getInitialState: function() {
        return { activeKey: 1 };
    },
    handleNavChange: function(selectedKey) {
        this.setState({ activeKey: selectedKey });
    },
    render: function() {
        return (
            <div>
                <header><PageHeader>Header</PageHeader></header>  
                <Nav bsStyle="pills" onSelect={this.handleNavChange} >
                    <NavItem eventKey={1}>Task List</NavItem>
                    <NavItem eventKey={2}>About</NavItem>
                </Nav>
            </div>
        );
    }
});

module.exports = Header;