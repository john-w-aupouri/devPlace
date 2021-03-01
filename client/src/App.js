import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Navbar from './components/layout/navbar.component';
import Alert from './components/layout/alert.component';
import Landing from './components/layout/landing.component';
import Register from './components/auth/register.component';
import Login from './components/auth/login.component';
import Profiles from './components/profiles/profiles.component';
import Profile from './components/profile/profile.component';
import PrivateRoute from './components/routing/private-route.component';
import Dashboard from './components/dashboard/dashboard.component';
import CreateProfile from './components/profile-forms/create-profile.component';
import EditProfile from './components/profile-forms/edit-profile.component';
import AddEducation from './components/profile-forms/add-education.component';
import AddExperience from './components/profile-forms/add-experience.component';
import Posts from './components/posts/posts.component';
import Post from './components/post/post.component';

import { loadUser } from './redux/actions/auth';
import setAuthToken from './utils/setAuthToken';

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

        <Alert />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profiles' component={Profiles} />
          <Route exact path='/profile/:id' component={Profile} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute
            exact
            path='/create-profile'
            component={CreateProfile}
          />
          <PrivateRoute exact path='/edit-profile' component={EditProfile} />
          <PrivateRoute exact path='/add-education' component={AddEducation} />
          <PrivateRoute
            exact
            path='/add-experience'
            component={AddExperience}
          />
          <PrivateRoute exact path='/posts' component={Posts} />
          <PrivateRoute exact path='/post/:id`' component={Post} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
