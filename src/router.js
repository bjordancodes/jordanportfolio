import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
export default (
<Switch>
    <Route exact path="/" component={AboutMe} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/skills" component={Skills} />

</Switch>)