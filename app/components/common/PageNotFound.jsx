
import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

class PageNotFound extends React.Component {
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

module.exports = PageNotFound;