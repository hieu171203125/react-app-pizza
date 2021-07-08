import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";

import { Grid } from "@material-ui/core";
import Header from "./Components/Header";
import LeftButton from "./Components/LeftButton";
import GirlImage from "./Components/GirlImage";
import bg from "./Assets/Gacha/background.png";
function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "100%",
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "absolute",
      }}
    >
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <Grid container></Grid>
          </Route>
        </Switch>
      </Router>
      <LeftButton />
      <GirlImage />
    </div>
  );
}

export default App;
