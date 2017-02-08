'use strict';

var React = require('react');

var DropDownList = React.createClass({
    renderItems: function() {
        return this.props.items.map(function(item) {
            return(
                <option
                    key={item.key}
                    value={item.key}>
                    {item.value}
                </option>
            );
        }, this);
    },
    render: function() {
        return (
            <select
                name={this.props.name}
                defaultValue={this.props.defaultValue}
                onChange={this.props.onChange}>
                {this.renderItems()}
            </select>
        )
    }
});

module.exports = DropDownList;