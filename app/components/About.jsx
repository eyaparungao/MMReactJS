'use strict';

var React = require('react');
var ReactBootstrap = require('../../node_modules/react-bootstrap/dist/react-bootstrap.js');
var Panel = ReactBootstrap.Panel;

var About = React.createClass({
    render: function() {
        return (
            <section> 
                <Panel header={this.props.title} bsStyle="primary">
                    <div>This is the About section.</div>
                </Panel>
            </section>
        );
    }
});

module.exports = About;