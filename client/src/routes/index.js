import {Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

const Routes = () =>
  <Switch>
    <Route path={['/', '/home', '/index']} component={Home} />
    <Route path='*' component={PageNotFound} />
  </Switch>

export default Routes;