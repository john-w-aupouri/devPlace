import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// Components
import Navbar from './components/layout/navbar.component';
import Alert from './components/layout/alert.component';
import PrivateRoute from './components/routing/private-route.component';

// Pages
import Landing from './pages/landing.component';
import Register from './pages/register.component';
import Login from './pages/login.component';
import Dashboard from './pages/dashboard.component';

// Actions
import { loadUser } from './redux/actions/auth';

import setAuthToken from './utils/setAuthToken';

// Styles
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
};

export default App;
