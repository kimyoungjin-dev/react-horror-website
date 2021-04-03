import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "Components/Header";
import Home from "Screens/Home";
import About from "Screens/About";
import Rentals from "Screens/Rentals";
import Dropdown from "./Dropdown";

export default ({ toggle, isOpen }) => (
  <Router>
    <Header toggle={toggle} isOpen={isOpen} />
    <Dropdown toggle={toggle} isOpen={isOpen} />
    <Switch>
      <Route exact path="/" component={Home}>
        <Home isOpen={isOpen} />
      </Route>
      <Route path="/about" component={About} />
      <Route path="/rentals" component={Rentals} />

      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
