'use strict';

var React = require('react');

var InputText = React.createClass({
    render: function() {
        return (
            <input 
                type="text"
                value={this.props.value}
                onChange={this.props.onChange}/>
        )
    }
});

module.exports = InputText;