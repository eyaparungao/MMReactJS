var React = require('react');
var ReactBootstrap = require('../../node_modules/react-bootstrap/dist/react-bootstrap.js');
var Panel = ReactBootstrap.Panel;

var Body = React.createClass({
    render: function() {
        return (
            <section>
                <Panel>Body</Panel>
            </section>
        );
    }
});

module.exports = Body;