import React from "react";
import CalciteThemeProvider from "calcite-react/CalciteThemeProvider";
import Header from "./components/Header";
import Stories from "./pages/Stories";
import Collections from "./pages/Collections";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isStg: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, checked } = event.target;
    this.setState(prevState => {
      return {
        [name]: checked,
        isStg: !prevState.isStg
      };
    });
  }

  render() {
    return (
      <CalciteThemeProvider>
        <Router>
          <Header isStg={this.state.isStg} handleChange={this.handleChange} />
          <Switch>
            <Route path="/stories">
              <Stories isStg={this.state.isStg} />
            </Route>
            <Route path="/collections">
              <Collections isStg={this.state.isStg} />
            </Route>
            <Route path="/">
              <Redirect to="/stories" />}
            </Route>
          </Switch>
        </Router>
      </CalciteThemeProvider>
    );
  }
}

export default App;
