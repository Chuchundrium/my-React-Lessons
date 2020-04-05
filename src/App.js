import React from 'react';
import './App.css';

import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { appInitialization } from './redux/reducers/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

import { withSuspense } from './hoc/withSuspense'

/** lazy loading: */
const Login = React.lazy(() => import('./components/Login/Login'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

class App extends React.Component {
  componentDidMount() {
    this.props.appInitialization();
  }
  render() {
    if (!this.props.ifInitialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/login' render={withSuspense(Login)} />
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route path='/users' render={withSuspense(UsersContainer)} />
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/news' render={withSuspense(News)} />
          <Route path='/music' render={withSuspense(Music)} />
          <Route path='/settings' render={withSuspense(Settings)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ifInitialized: state.app.ifInitialized
});

// export default compose(
//   withRouter, /** !!! Important */
//   connect(mapStateToProps, { appInitialization }))(App);

/** for App.test.js : */
const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { appInitialization }))(App);

const NetworkApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default NetworkApp;