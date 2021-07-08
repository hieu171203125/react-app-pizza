import React, { useRef } from "react";
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
import imgheader from "../Assets/Gacha/header.png";
import name from "../Assets/Gacha/background_name.png";
import logo from "../Assets/Gacha/logo.png";
import button_header from "../Assets/Gacha/button_header.png";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Fragment } from "react";
function Header() {
  const classes = useStyles();
  const header = useRef();
  const but = useRef();
  window.addEventListener("load", () => {
    if (header.current) {
      header.current.style.transform = "translateY(0px)";
    }
    if (but.current) {
      but.current.style.transform = "translateY(20px)";
    }
    setTimeout(() => {
      if (but.current) {
        but.current.style.transform = "translateY(0px)";
      }
    }, 1500);
  });
  return (
    <Fragment>
      <AppBar className={classes.header} color="transparent" ref={header}>
        <Hidden only={["sm", "xs"]}>
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
            <nav className={classes.navmenu} ref={but}>
              <button className={classes.btn}>
                <Typography className={classes.titlebtn}>
                  wallet connect
                </Typography>
              </button>
              <button className={classes.btn}>
                <Typography className={classes.titlebtn}>info</Typography>
              </button>
            </nav>
          </div>
          {/* <div className={classes.listmenu}>
                      <nav className={classes.navmenu}>
                        <Button className={classes.btn}>Home</Button>
                        <Button className={classes.btn}>Bag</Button>
                        <Button className={classes.btn}>more</Button>
                      </nav>
                    </div> */}
        </Hidden>
        <Hidden only={["md", "lg", "xl"]}>
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
        </Hidden>
      </AppBar>
    </Fragment>
  );
}
const height_header = 100;
const height_backgroud_logo = 132;
const width_backgroud_logo = 145;
const height_logo = 82;
const width_logo = 86;
const height_header_mobile = 60;
const height_backgroud_logo_mobile = 72;
const width_backgroud_logo_mobile = 86;
const useStyles = makeStyles((theme) => ({
  header: {
    fontFamily: "Crimson Text, serif !important",
    transition: "1.8s",
    transform: "translateY(-150px)",
    width: "100%",
    background: `url(${imgheader})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    height: height_header,
    top: 0,
    [theme.breakpoints.down("sm")]: {
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
    height: height_logo,
    width: width_logo,
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginLeft: 14,
    marginTop: 7,
  },
  walletAdress: {
    position: "absolute",
    height: 35,
    width: "30%",
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
    marginTop: 3,
    fontSize: 16,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
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
    fontWeight: 600,
    fontSize: 20,
    color: "white",
    transition: "0.5s",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    "&:hover": {
      transform: "scale(1.10)",
    },
  },
  titlebtn: {
    width: "min-content",
    lineHeight: 1,
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
    transition: "1.8s",
    transform: "translateY(-150px)",
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
    fontSize: 20,
    color: "white",
  },
  buttonmenumobile: {
    color: "white",
  },
}));
export default Header;
