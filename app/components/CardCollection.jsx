'use strict';

var React = require('react');
var Card = require('./Card');

var CardCollection = React.createClass({
    render: function() {
        return (
            <div className='cardcollection'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
});

module.exports = CardCollection;