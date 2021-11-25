import '../sass/App.scss';
import Nav from "./Nav";
import Homepage from "./Homepage";
import About from "./About";
import Location from "./Location";
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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/location/:id">
            <Location />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
