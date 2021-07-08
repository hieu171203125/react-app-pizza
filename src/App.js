import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import {
  Button,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
// import btn45 from "./Assets/Gacha/btn45.png";
import bg from "./Assets/Gacha/background.png";
import hlogo from "./Assets/Gacha/background_logo.png";
import wallet from "./Assets/Gacha/wallet.png";
import header from "./Assets/Gacha/header.png";

import name from "./Assets/Gacha/background_name.png";
import logo from "./Assets/Gacha/logo.png";
import button_header from "./Assets/Gacha/button_header.png";
import { Hidden } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LeftButton from "./Components/LeftButton";
import GirlImage from "./Components/GirlImage";

function App() {
  const classes = useStyles();
  const height = document.getElementById("root").offsetHeight - 1;
  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <Router>
        <Switch>
          <Route path="/">
            <Grid
              container
              style={{
                width: "100%",
                height: "100%",
                background: `url(${bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Hidden only={["sm", "xs"]}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  style={{
                    height: "100%",
                  }}
                >
                  <div className={classes.header}>
                    <div className={classes.topheader}></div>
                    <div className={classes.walletAdress}>
                      <Typography className={classes.textwallet}>
                        {" "}
                        wallet network{" "}
                      </Typography>
                    </div>
                    <div className={classes.hlogo}>
                      <div className={classes.logo}></div>
                    </div>
                    <div className={classes.hname}>hieu</div>
                    {/* <div className={classes.btnLogin}>
                    <button className={classes.btn}>hello</button>
                  </div>
                  <div className={classes.btnInfo}>
                    <button className={classes.btn}>kitty</button>
                  </div> */}
                    <div className={classes.listmenu}>
                      <nav className={classes.navmenu}>
                        <Button className={classes.btn}>Home</Button>
                        <Button className={classes.btn}>Bag </Button>
                        <Button className={classes.btn}> more</Button>
                      </nav>
                    </div>
                  </div>
                </Grid>
              </Hidden>
              <Hidden only={["md", "lg", "xl"]}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  style={{
                    height: "100%",
                  }}
                >
                  <div className={classes.headermobile}>
                    <div className={classes.hlogomobile}>
                      <div className={classes.logomobile}></div>
                    </div>
                    <div className={classes.hnamemobile}>hieu</div>
                    <div>
                      <IconButton
                        color="primary"
                        style={{ backgroundColor: "white" }}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </div>
                  </div>
                </Grid>
              </Hidden>
            </Grid>
          </Route>
        </Switch>
      </Router>
      <LeftButton />
      <GirlImage />
    </div>
  );
}
const height_header = 100;
const height_backgroud_logo = 150;
const width_backgroud_logo = 148;
const height_header_mobile = 60;
const height_backgroud_logo_mobile = 85;
const width_backgroud_logo_mobile = 89;
const useStyles = makeStyles((theme) => ({
  header: {
    zIndex: 1,
    top: 0,
    height: height_header,
    position: "relative",
  },
  topheader: {
    zIndex: 1,
    top: 0,
    left: 0,
    width: "100%",
    height: height_header,
    background: `url(${header})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
  },

  hlogo: {
    position: "absolute",
    zIndex: 2,
    height: height_backgroud_logo,
    width: width_backgroud_logo,
    background: `url(${hlogo})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    top: 0,
    left: 0,
    paddingTop: 17,
  },
  logo: {
    zIndex: 2,
    height: 70,
    width: 70,
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginLeft: 10,
  },
  walletAdress: {
    position: "absolute",
    zIndex: 2,
    height: 35,
    width: "25%",
    background: `url(${wallet})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    marginLeft: 101,
    textAlign: "left",
    paddingLeft: 30,
    color: "white",
  },
  textwallet: {
    marginLeft: 10,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  hname: {
    zIndex: 2,
    position: "absolute",
    bottom: "18%",
    left: "13%",
    height: 40,
    width: "10%",
    maxWidth: 210,
    background: `url(${name})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 5,
    fontFamily: "monospace",
    fontSize: 20,
    color: "white",
  },
  btn: {
    // backgroundImage: `url(${button_header})`,
    // backgroundSize: "cover",
    // border: "none",
    // backgroundColor: "transparent",
    // backgroundRepeat: "no-repeat",
    height: 50,
    width: "auto",
    fontFamily: "monospace",
    fontWeight: 600,
    fontSize: 20,
    color: "white",
    backgroundColor: "transparent",
    border: "2px solid wheat",
    borderRadius: 15,
    transition: "0.5s",
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    "&:hover": {
      transform: "scale(1.10)",
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: 20,
    marginBottom: 5,
  },

  listmenu: {
    position: "absolute",
    right: "10%",
    top: 0,
    height: "100%",
  },
  navmenu: {
    height: "100%",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  itemmenu: {
    height: 50,
    width: 120,
    backgroundImage: `url(${button_header})`,
    backgroundSize: "cover",
    border: "none",
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#620001",
    border: "1px solid wheat",
    borderRadius: 5,
    padding: 7,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    cursor: "pointer",
    color: "white",
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.20)",
    },
  },
  //style moblie
  headermobile: {
    zIndex: 1,
    top: 0,
    height: height_header_mobile,
    background: `url(${header})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },

  hlogomobile: {
    zIndex: 2,
    height: height_backgroud_logo_mobile,
    width: width_backgroud_logo_mobile,
    background: `url(${hlogo})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    top: 0,
    left: 0,
    paddingTop: 17,
  },
  logomobile: {
    zIndex: 2,
    height: 53,
    width: 50,
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginLeft: 6,
    marginTop: 7,
  },
  hnamemobile: {
    zIndex: 2,
    height: 40,
    width: "20%",
    maxWidth: 210,
    background: `url(${name})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 5,
    fontFamily: "monospace",
    fontSize: 20,
    color: "white",
  },
}));
export default App;
