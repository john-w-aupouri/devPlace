import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar.component';
import Landing from './components/layout/landing.component';
import Register from './pages/register.component';
import Login from './pages/login.component';

import './App.css';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    </Fragment>
  );
};

export default App;
