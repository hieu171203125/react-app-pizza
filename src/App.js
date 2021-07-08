import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";

import { Grid } from "@material-ui/core";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <Grid container></Grid>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
