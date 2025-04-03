import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ArtistProfile from './pages/ArtistProfile';
import BookingConfirmation from './pages/BookingConfirmation';
import Chat from './pages/Chat';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/artist/:id" component={ArtistProfile} />
        <Route path="/booking-confirmation" component={BookingConfirmation} />
        <Route path="/chat" component={Chat} />
        <Route path="/admin" component={AdminPanel} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;