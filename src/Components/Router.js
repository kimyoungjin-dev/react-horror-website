import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "Components/Header";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
