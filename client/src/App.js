import { Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/navbar.component';
import Alert from './components/alert.component';

// Pages
import Landing from './pages/landing.component';
import Register from './pages/register.component';
import Login from './pages/login.component';

// Styles
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Alert />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    </div>
  );
};

export default App;
