import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/homePage/homePage';
import LoginPage from './components/pages/auth/loginPage';
import LeaderBoard from './components/pages/leaderBoard/leaderBoard';
import PageNotFound from './components/pages/errorPage/pageNotFound';
import NavBar from './components/pages/layout/navBar';
import Footer from './components/pages/layout/footer';

function App() {
  return (
    <div className='container-fluid'>
      <NavBar />
      <section className='container'>
        <Router>
          <Switch>
            <Route path='/' exact component={LoginPage} />
            <Route path='/HomePage' exact component={HomePage} />
            <Route path='/leader_board' exact component={LeaderBoard} />
            <Route path='*' exact component={PageNotFound} />
          </Switch>
        </Router>
      </section>
      <Footer />
    </div>
  );
}

export default App;
