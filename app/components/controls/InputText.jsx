'use strict';

var React = require('react');

var InputText = React.createClass({
    render: function() {
        return (
            <input 
                type="text"
                className="form-control"
                name={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.props.onChange}/>
        )
    }
});

module.exports = InputText;