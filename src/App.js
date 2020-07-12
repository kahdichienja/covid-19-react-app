import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavigationBar from "./components/Sidenav";
import AgendaApp from "./components/agenda/AgendaApp";
import Homepage from "./components/Homepage";
import Covid from './components/covid19/Covid'

import "./index.css";
class App extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <Fragment>
          <NavigationBar />
          <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/agenda" exact component={AgendaApp} />
          <Route path="/covid" exact component={Covid}/>
          <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
