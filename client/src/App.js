import React, { Fragment } from 'react';
import Landing from './components/layout/landing/landing.component';
import Navbar from './components/layout/navbar/navbar.component';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
};

export default App;
