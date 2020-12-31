import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar/navbar.component';
import Landing from './components/layout/landing/landing.component';
import Register from './components/layout/auth/register/register.component';
import Login from './components/layout/auth/login/login.component';
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
