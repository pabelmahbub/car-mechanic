import logo from './logo.svg';
import './App.css';
import Services from './Pages/Home/Services/Services';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import ManageServices from './ManageServices/ManageServices';

function App() {
  return (
    <div className="App">
      <AuthProvider>

     
      <Router>
        <Header></Header>
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <PrivateRoute path="/booking/:serviceId">
          <Booking></Booking>
        </PrivateRoute>

        <Route path="/addService">
          <AddService></AddService>
        </Route>

        <Route path="/manageServices">
          <ManageServices></ManageServices>
        </Route>


        <Route path="*">
          <NotFound />
        </Route>
       
      </Switch>
    </div>
  </Router>
  </AuthProvider>
    </div>
  );
}

export default App;
