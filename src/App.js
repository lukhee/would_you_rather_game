import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/homePage/homePage';
import LoginPage from './components/pages/auth/loginPage';
import CreateQuestion from './components/pages/createPage/createQuestion';
import LeaderBoard from './components/pages/leaderBoard/leaderBoard';
import PageNotFound from './components/pages/errorPage/pageNotFound';
import NavBar from './components/pages/layout/navBar';
import Footer from './components/pages/layout/footer';
import styled from 'styled-components';
import PrivateRoute from './routing/privateRoute'
// Redux
import { Provider } from 'react-redux';
import store from './store';

const Section = styled.section`
  height: 80vh;
  background: grey;
`;

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <NavBar />
          <Section className='container'>
            <Switch>
              <Route path='/' exact component={LoginPage} />
              <PrivateRoute path='/HomePage' exact component={HomePage} />
              <PrivateRoute path='/create_question' exact component={CreateQuestion} />
              <PrivateRoute path='/leader_board' exact component={LeaderBoard} />
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
