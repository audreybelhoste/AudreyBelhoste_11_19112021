import '../sass/App.scss';
import Nav from "./Nav";
import Homepage from "./Homepage";
import About from "./About";
import Location from "./Location";
import E404 from "./E404";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/location/:id">
            <Location />
          </Route>
          <Route path="/404">
            <E404 />
          </Route>
          <Route path="*">
            <E404 />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
