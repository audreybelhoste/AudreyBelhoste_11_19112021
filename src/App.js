import './sass/App.scss';
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Location from "./pages/Location";
import E404 from "./pages/Error";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';

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
          <Route exact path="/location/:id">
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
