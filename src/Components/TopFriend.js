import { Avatar, Badge, Grid, makeStyles, withStyles } from "@material-ui/core";
import React from "react";

function ListFriend() {
  const classes = useStyles();
  const friend = [
    {
      name: "hieu",
      avatar:
        "https://i.pinimg.com/564x/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.jpg",
      online: true,
    },
    {
      name: "hieu",
      avatar:
        "https://i.pinimg.com/564x/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.jpg",
      online: true,
    },
    {
      name: "hieu",
      avatar:
        "https://i.pinimg.com/564x/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.jpg",
      online: false,
    },
    {
      name: "hieu",
      avatar:
        "https://i.pinimg.com/564x/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.jpg",
      online: true,
    },
    {
      name: "hieu",
      avatar:
        "https://i.pinimg.com/564x/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.jpg",
      online: false,
    },
    {
      name: "hieu",
      avatar:
        "https://i.pinimg.com/564x/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.jpg",
      online: true,
    },
    {
      name: "hieu",
      avatar:
        "https://i.pinimg.com/564x/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.jpg",
      online: false,
    },
    {
      name: "hieu",
      avatar:
        "https://i.pinimg.com/564x/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.jpg",
      online: true,
    },
    {
      name: "hieu",
      avatar:
        "https://i.pinimg.com/564x/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.jpg",
      online: false,
    },
  ];
  return (
    <div className={classes.siderBar}>
      <Grid container spacing={2} style={{ paddingTop: 20 }}>
        {friend.map((fr, index) => (
          <Grid item xs={12} key={index}>
            <div className={classes.root}>
              <StyledBadge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant={fr?.online ? "dot" : "standard"}
              >
                <Avatar alt="Remy Sharp" src={fr.avatar} />
              </StyledBadge>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);
const useStyles = makeStyles((theme) => ({
  siderBar: {
    paddingTop: 30,
    height: "100%",
    width: 70,
    position: "fixed",
    right: 0,
    top: 30,
    left: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
export default ListFriend;
