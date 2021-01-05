import React, { useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Navbar from './components/navbar.component';
import Alert from './components/alert.component';

import Landing from './pages/landing.component';
import Register from './pages/register.component';
import Login from './pages/login.component';

import { loadUser } from './redux/actions/auth';

import setAuthToken from './redux/utils/setAuthToken';

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
      <Navbar />
      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Alert />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    </Provider>
  );
};

export default App;
