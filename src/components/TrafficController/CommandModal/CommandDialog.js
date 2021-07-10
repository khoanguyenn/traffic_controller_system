import {
  Dialog,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
const useStyles = makeStyles({
  dialog: {
    height: "600px",
    width: "600px",
    padding: "5px 20px",
  },
  commandBox: {
    height: "400px",
    width: "100%",
  },
  commandInput: {
    width: "80%",
    height: "50px",
    marginRight: "5px",
  },
  commandBar: {
    width: "100%",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
  },
  commandButton: {
    width: "20%",
  },
});
const CommandDialog = (props) => {
  const classes = useStyles();
  const [inlineCommand, setInlineCommand] = useState("");
  const [command, setCommand] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    inlineCommand.trim().length > 0 &&
      setCommand((prevState) => {
        return [prevState + inlineCommand + "\n"];
      });
    setInlineCommand("");
  };
  const handleChange = (event) => {
    setInlineCommand(event.target.value);
  };
  const { onClose, open } = props;
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Command Terminal</DialogTitle>
      <div className={classes.dialog}>
        <div>
          <textarea
            readOnly
            placeholder="Executing command..."
            className={classes.commandBox}
            value={command}
          />
        </div>
        <form className={classes.commandBar} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Please enter a command..."
            className={classes.commandInput}
            onChange={handleChange}
            value={inlineCommand}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.commandButton}
          >
            Submit
          </Button>
        </form>
      </div>
    </Dialog>
  );
};

export default CommandDialog;
