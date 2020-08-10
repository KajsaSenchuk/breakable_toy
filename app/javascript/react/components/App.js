import React from 'react'
import { Route, Switch, BrowserRouter} from "react-router-dom";

import StoresIndexPage from './StoresIndexPage';
import StoreShowPage from './StoreShowPage'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StoresIndexPage} />
        <Route exact path="/stores" component={StoresIndexPage} />
        <Route exact path="/stores/:id" component={StoreShowPage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App