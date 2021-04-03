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

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/rentals" component={Rentals} />

      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
