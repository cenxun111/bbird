import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin:"10px 20px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  p: {
    margin: theme.spacing(4)
  }
}));

export default function Links() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
      <Typography className={classes.root}>
        <Link href="#" onClick={preventDefault} className="classes.pa">
          Link
        </Link>
      </Typography>

      <Typography className={classes.root}>
        <Link href="#" onClick={preventDefault} className="classes.pa">
          Link
        </Link>
      </Typography>
      <Typography className={classes.root}>
        <Link href="#" onClick={preventDefault} className="classes.pa">
          Link
        </Link>
      </Typography>
      <Typography className={classes.root}>
        <Link href="#" onClick={preventDefault} className="classes.pa">
          Link
        </Link>
      </Typography>
    </div>
  );
}