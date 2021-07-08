import React from "react";
import {
  Button,
  IconButton,
  makeStyles,
  Typography,
  AppBar,
  Hidden,
} from "@material-ui/core";
import bg from "../Assets/Gacha/background.png";
import hlogo from "../Assets/Gacha/background_logo.png";
import wallet from "../Assets/Gacha/wallet.png";
import header from "../Assets/Gacha/header.png";
import name from "../Assets/Gacha/background_name.png";
import logo from "../Assets/Gacha/logo.png";
import button_header from "../Assets/Gacha/button_header.png";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Fragment } from "react";
function Header() {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar
        position="static"
        style={
          {
            //   width: "100%",
            //   height: "auto",
            //   background: `url(${header})`,
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            //   position: "absolute",
          }
        }
        className={classes.header}
        color="transparent"
      >
        <Hidden only={["sm", "xs"]}>
          {/* <div className={classes.header}> */}
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
          <div className={classes.listmenu}>
            <nav className={classes.navmenu}>
              <button className={classes.btn}>Login</button>
              <button className={classes.btn}>info</button>
            </nav>
          </div>
          {/* <div className={classes.listmenu}>
                      <nav className={classes.navmenu}>
                        <Button className={classes.btn}>Home</Button>
                        <Button className={classes.btn}>Bag</Button>
                        <Button className={classes.btn}>more</Button>
                      </nav>
                    </div> */}
          {/* </div> */}
        </Hidden>
        <Hidden only={["md", "lg", "xl"]}>
          {/* <div className={classes.headermobile}> */}
          <div className={classes.hlogomobile}>
            <div className={classes.logomobile}></div>
          </div>
          <div className={classes.hnamemobile}>gacha game</div>
          <div>
            <IconButton
              className={classes.buttonmenumobile}
              style={{ backgroundColor: "#0000006b" }}
            >
              <MoreVertIcon />
            </IconButton>
          </div>
          {/* </div> */}
        </Hidden>
      </AppBar>
    </Fragment>
  );
}
const height_header = 100;
const height_backgroud_logo = 132;
const width_backgroud_logo = 145;
const height_header_mobile = 60;
const height_backgroud_logo_mobile = 72;
const width_backgroud_logo_mobile = 86;
const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    background: `url(${header})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    height: height_header,
    top: 0,
    [theme.breakpoints.down("md")]: {
      height: height_header_mobile,
      display: "flex",
      justifyContent: "space-between",
      alignContent: "center",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "nowrap",
    },
  },
  hlogo: {
    position: "absolute",
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
    height: 70,
    width: 70,
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginLeft: 10,
  },
  walletAdress: {
    position: "absolute",
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
    fontSize: 16,
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
      marginLeft: "1%",
    },
  },
  hname: {
    position: "absolute",
    bottom: "18%",
    left: "15%",
    height: 40,
    width: "auto",
    minWidth: "20%",
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
    cursor: "pointer",
    backgroundImage: `url(${button_header})`,
    backgroundSize: "cover",
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    border: "none",
    height: 60,
    width: "auto",
    minWidth: 153,
    top: "25%",
    borderRadius: 15,
    paddingBottom: 9,
    paddingRight: 17,
    fontFamily: "monospace",
    fontWeight: 600,
    fontSize: 20,
    color: "white",
    transition: "0.5s",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
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
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  itemmenu: {
    height: 50,
    width: 120,
    backgroundImage: `url(${button_header})`,
    backgroundSize: "cover",
    border: "none",
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
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
    top: 0,
    height: height_header_mobile,
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },

  hlogomobile: {
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
    height: 53,
    width: 53,
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginLeft: 9,
    marginTop: 5,
  },
  hnamemobile: {
    height: 40,
    padding: "0 10px",
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
  buttonmenumobile: {
    color: "white",
  },
}));
export default Header;
