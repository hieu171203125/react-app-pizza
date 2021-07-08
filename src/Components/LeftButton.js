import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import btnDiamond from "../Assets/Gacha/button_diamond.png";
import btnOctagon from "../Assets/Gacha/button_octagon.png";

export default function LeftButton() {
  const classes = useStyles();

  return (
    <div className={classes.listBtn}>
      <button className={classes.btnDiamond}>
        <p className={classes.btnText} style={{ marginLeft: "-20px" }}>
          Collection
        </p>
      </button>
      <button className={classes.btnDiamond} style={{ marginLeft: "175px" }}>
        <p className={classes.btnText} style={{ marginLeft: "4px" }}>
          Stake
        </p>
      </button>
      <button className={classes.btnOctagon}>
        <p className={classes.btnText} style={{ fontSize: 42, marginTop: 18 }}>
          BUY PACK
        </p>
      </button>
      <button className={classes.btnDiamond} style={{ marginTop: "160px" }}>
        <p className={classes.btnText} style={{ marginLeft: "-5px" }}>
          Market
        </p>
      </button>
      <button
        className={classes.btnDiamond}
        style={{ marginTop: "160px", marginLeft: "175px" }}
      >
        <p className={classes.btnText} style={{ marginTop: "17px" }}>
          Buy MAI
        </p>
      </button>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  listBtn: {
    position: "fixed",
    bottom: "81%",
    left: "18%",
    animation: `$myEffect 1800ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      bottom: -1000,
      left: "18%",
    },
    "100%": {
      opacity: 1,
      bottom: "81%",
      left: "18%",
    },
  },
  btnDiamond: {
    backgroundImage: `url(${btnDiamond})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: 95,
    height: 95,
    backgroundColor: "inherit",
    border: "none",
    cursor: "pointer",
    position: "fixed",
    padding: 0,
  },
  btnOctagon: {
    backgroundImage: `url(${btnOctagon})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: 125,
    height: 125,
    backgroundColor: "inherit",
    border: "none",
    cursor: "pointer",
    position: "fixed",
    padding: 0,
    marginLeft: 75,
    marginTop: 65,
  },
  btnText: {
    fontSize: 30,
    color: "rgb(255 228 190)",
    textShadow:
      "2px 0 0 rgb(26, 26, 26), -2px 0 0 rgb(26, 26, 26), 0 2px 0 rgb(26, 26, 26), 0 -2px 0 rgb(26, 26, 26), 1px 1px rgb(26, 26, 26), -1px -1px 0 rgb(26, 26, 26), 1px -1px 0 rgb(26, 26, 26), -1px 1px 0 rgb(26, 26, 26)",
    fontFamily: "Crimson Text, serif",
    fontWeight: 700,
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.15)",
    },
  },
  "@media (max-width: 859.95px)": {
    listBtn: {
      left: "10%",
    },
    "@keyframes myEffect": {
      "0%": {
        opacity: 0,
        bottom: -1000,
        left: "10%",
      },
      "100%": {
        opacity: 1,
        bottom: "81%",
        left: "10%",
      },
    },
  },
}));
