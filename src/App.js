import logo from './logo.svg';
import './App.css';
import Services from './Pages/Home/Services/Services';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
       
      </Switch>
    </div>
  </Router>
    </div>
  );
}

export default App;
