import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/homePage/homePage';
import LoginPage from './components/pages/auth/loginPage';
import SignIn from './components/pages/auth/signIn';
import Register from './components/pages/auth/register';
import CreateQuestion from './components/pages/createPage/createQuestion';
import LeaderBoard from './components/pages/leaderBoard/leaderBoard';
import PageNotFound from './components/pages/errorPage/pageNotFound';
import NavBar from './components/pages/layout/navBar';
import Footer from './components/pages/layout/footer';
import styled from 'styled-components';
import PrivateRoute from './routing/privateRoute'
import * as ROUTE from './routing/routeConstant'
// Redux
import { Provider } from 'react-redux';
import store from './store';

const Section = styled.section`
  height: 80vh;
  z-index: 100;
  position: relative;
`;

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <NavBar />
          <Section className='container bg-light'>
            <Switch>
              <Route path={ROUTE.SIGNIN} exact component={SignIn} />
              <Route path={ROUTE.LOGIN} exact component={LoginPage} />
              <Route path={ROUTE.REGISTER} exact component={Register} />
              <PrivateRoute path={ROUTE.HOMEPAGE} exact component={HomePage} />
              <PrivateRoute path={ROUTE.CREATE_QUESTION} exact component={CreateQuestion} />
              <PrivateRoute path={ROUTE.LEADER_BOARD} exact component={LeaderBoard} />
              <Route path='*' exact component={PageNotFound} />
            </Switch>
          </Section>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
