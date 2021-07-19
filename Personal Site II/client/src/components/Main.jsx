import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Landing, Projects, About, Contact, NotFound } from './pages';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/me" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
    </Switch>
);

export default Main;
