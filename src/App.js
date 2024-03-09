import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { AuthContext, FirebaseContext } from './store/Context';
import Home from './Pages/Home';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext'
function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      // console.log('User:', user);
      setUser(user);
    });

    // Cleanup the subscription to avoid memory leaks
    return () => unsubscribe();
  }, [setUser, firebase]);  // Include dependencies in the dependency array

  return (
    <div>
    <Post>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='/view'>
          <View/>
        </Route>
      </Router>
      </Post>
    </div>
  );
}

export default App;
