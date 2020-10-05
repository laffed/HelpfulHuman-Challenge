import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from './Pages/Main/Main';
import Detail from './Pages/Detail/Detail';
import NotFound from './Pages/NotFound/NotFound';

function Routes() {

  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/detail' component={Detail} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
}

export default Routes;