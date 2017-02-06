import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

class About extends React.Component {
    render() {
        return (
            <section> 
                <Panel header={this.props.title} bsStyle="primary">
                    <div>This is the About section.</div>
                </Panel>
            </section>
        );
    }
};

module.exports = About;