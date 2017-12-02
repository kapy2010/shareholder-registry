import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Investor from './investor/investor';
import Register from './registry/register';

const Routes = () => {
  return(
    <main>
      <Switch>
        <Route exact path='/' component={Investor}/>
        <Route path='/register' component={Register}/>
      </Switch>
    </main>
  );
};

export default Routes;