import { Backdrop, makeStyles } from "@material-ui/core";
import React from "react";

import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "../assets/scss/custom/404.scss"
const useStyles = makeStyles((theme) => ({
  Container: {
    width: "100%",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#000000",
    width: "100%",
  },
  homeButton: {
    backgroundColor: "#33cf33",
    color: "white",
    "&:hover": {
      backgroundColor: "#45e745",
    },
  },
}));
const Page404 = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Backdrop open={true} className={classes.backdrop}>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>the page you are looking for not available!</p>

                  <Button
                    style={{ outline: "none" }}
                    className={classes.homeButton}
                    variant="contained"
                    onClick={() => history.push("/")}
                  >
                    Go to Home
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Backdrop>
  );
};

export default Page404;
