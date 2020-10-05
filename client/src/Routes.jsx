import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from './Pages/Main/Main';
import Detail from './Pages/Detail/Detail';

function Routes() {

  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/detail' component={Detail} />
    </Switch>
  );
}

export default Routes;