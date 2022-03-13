import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Routes, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      currentUser: null
    }
  }

  unsuscribeFromAuth = null

  componentDidMount() {
   this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})

    })
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/signIn' element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );

  }
}

export default App;

