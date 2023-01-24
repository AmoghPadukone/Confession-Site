import React, { useState, useRef } from "react";
import { TextField, Box, ClickAwayListener, Button } from "@mui/material";
import { styled } from "@mui/material";
import { v4 as uuid } from "uuid";
import SendIcon from "@mui/icons-material/Send";
import { dbInstance } from "../../firebaseConfig";
import { addDoc } from "firebase/firestore";

const Container = styled(Box)`
  font-family: "Roboto", sans-serif;

  display: flex;
  flex-direction: column;
  max-width: 50%;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  margin: auto;
  margin-top: 70px;
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  min-height: 50px;
  border: 1px solid black;
  box-shadow: 0.4rem 0.5em rgba(121, 121, 121, 0.65);
  @media only screen and (max-width: 600px) {
    max-width: 80%;
  }
`;

const ActionsStyle = {
  display: "flex",
  justifyContent: "flex-end",
};

const note = {
  id: "",
  PseudoName: "",
  confession: "",
};

const ConfessionBox = () => {
  const [showName, setShowName] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });

  const containerRef = useRef();

  const onTextAreaClick = () => {
    setShowName(true);
    containerRef.current.style.minHeight = "70px";
  };

  const handleClickAway = () => {
    setShowName(false);
    containerRef.current.style.minheight = "30px";
  };

  //////////////////////////////////////////////////////////////////

  const handleSend = () => {
    containerRef.current.style.minheight = "30px";

    if (addNote.confession && addNote.PseudoName !== "") {
      addDoc(dbInstance, addNote)
        .then(() => {
          alert("Confession Submitted");
        })
        .catch((err) => {
          alert("Something went wrong:(");
          console.log(err.message);
        });
      setAddNote({ ...note, id: uuid() });
    } else {
      alert("Fill both the Boxes to submit confession");
    }
  };

  const onTextChange = (e) => {
    console.log(e.target.name, e.target.value);
    let changeNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(changeNote);
  };

  const Actions = (
    <div style={ActionsStyle}>
      <Button
        onClick={handleSend}
        variant="elevated"
        style={{ margin: ".5rem" }}
        endIcon={<SendIcon />}
      >
        Submit
      </Button>
    </div>
  );

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showName && (
          <TextField
            placeholder="Add an Psuedoname"
            variant="standard"
            style={{ marginBotton: 10, margin: 10 }}
            onChange={(e) => onTextChange(e)}
            name="PseudoName"
            value={addNote.PseudoName}
          />
        )}
        <TextField
          onClick={onTextAreaClick}
          multiline
          placeholder="Make your Confession...."
          maxRows={6}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          style={{
            marginBotton: 10,
            margin: 10,
          }}
          onChange={(e) => onTextChange(e)}
          name="confession"
          value={addNote.confession}
        />
        {showName && Actions}
      </Container>
    </ClickAwayListener>
  );
};

export default ConfessionBox;
