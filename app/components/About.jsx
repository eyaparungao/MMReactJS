import React, { Component } from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <section> 
                <Panel 
                    header={ this.props.title } 
                    bsStyle="primary">
                    <div>This is the About section.</div>
                </Panel>
            </section>
        );
    }
};