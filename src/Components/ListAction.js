import { Grid, IconButton, makeStyles, Tooltip } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import React from "react";

function ListAction() {
  const classes = useStyles();
  const action = [1, 2, 3, 4];
  return (
    <div className={classes.siderBar}>
      <Grid container spacing={2} style={{ paddingTop: 20 }}>
        {action.map((fr, index) => (
          <Grid item xs={12} key={index}>
            <Tooltip title={"Photo"} placement="right">
              <IconButton
                className={classes.buttonicon}
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  siderBar: {
    height: "100%",
    width: 70,
    top: 56,
    position: "fixed",
    left: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttonicon: {
    marginLeft: 20,
  },
}));
export default ListAction;
