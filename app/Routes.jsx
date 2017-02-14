import React from 'react';
import Router, { Route, Redirect } from 'react-router';
import Layout from './components/Layout';
import About from './components/About';
import TaskContainer from './components/tasks/TaskContainer';
import PageNotFound from './components/common/PageNotFound';

const routes = ( //TODO: INdex
    <Route path="/" component={Layout}>
        <Route 
            path="Tasks" 
            component={TaskContainer} />
        <Route 
            path="About" 
            component={About} />
        <Route 
            path="/404" 
            component={PageNotFound} />
        <Redirect 
            from="*" 
            to="/404" />
    </Route>
);

export default routes;