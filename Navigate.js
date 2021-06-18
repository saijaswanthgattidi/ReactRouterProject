import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Table from './Table';
import LifeCycle from './LifeCycle';

function Navigate(){
    return(
        <BrowserRouter>
             <Link to="/">Home </Link><br></br>
             <Link to="/githubdata"> GITHUB USERDATA</Link><br></br>
             <Link to="/location"> LOCATION</Link>

             <Switch>
                <Route exact path="/githubdata" component={LifeCycle}/>
                <Route path="/location" component={Table}/>
             </Switch>
        </BrowserRouter>
    )
}

export default Navigate;

