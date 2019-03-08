import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
const styles = theme => ({
    root: {
      flexGrow: 1,
      margin: 10
    }
  });


function index(props) {
  const [list, setList] = useState(null);
  const { classes } = props;
  useEffect(() => {
    try {
      var body = {
        methodName: "GoogleAds",
        adType: "4"
      };
      window.webkit.messageHandlers.OtherOperation.postMessage(body);
    } catch (error) {
      console.log(error);
    }
  }, []);

  window.iOSADInfoCallBack = str => {
    let goole = document.getElementById("goole");
    goole.innerHTML = str;

    let newStr = JSON.parse(str);
    setList(newStr);
  };

  return (
    <Paper className={classes.root} elevation={1}>
      {list ? (
        <div className="goole-AD">
            <h3>{list.headline}</h3>
          <img src={list.iconImageURL} alt="广告" />
        </div>
      ) : null}

      <div id="goole" />
    </Paper>
  );
}

index.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(index);
  