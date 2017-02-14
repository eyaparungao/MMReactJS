import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class PageNotFound extends Component {
    render() {
        return (
            <section> 
                <Panel bsStyle="primary">
                    <div>Page not found.</div>
                </Panel>
            </section>
        );
    }
};