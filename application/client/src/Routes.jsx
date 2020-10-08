import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Main from './Pages/Main/Main';
import Detail from './Pages/Detail/Detail';
import NotFound from './Pages/NotFound/NotFound';

function Routes() {

  return (
    <Switch>
      <Route exact path='/' >
        <Redirect to='/page/1' />
      </Route>
      <Route path='/page' component={Main} />
      <Route path='/detail' component={Detail} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
}

export default Routes;