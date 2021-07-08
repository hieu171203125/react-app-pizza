import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import girlImage from "../Assets/Gacha/girl_image.png";

export default function GirlImage() {
  const classes = useStyles();

  return (
    <>
      <img src={girlImage} class={classes.girlImage} alt="" />;
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  girlImage: {
    width: 480,
    position: "fixed",
    bottom: 0,
    right: 0,
    animation: `$myEffect 1800ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 1,
      bottom: 0,
      right: -1000,
    },
    "100%": {
      opacity: 1,
      bottom: 0,
      right: 0,
    },
  },
}));
