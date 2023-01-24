import { useState } from "react";

import React from "react";
import ConfessionBox from "./ConfessionBox";
import PageDivision from "../UI/PageDivision";
import Note from "./Note";

import { Grid } from "@mui/material";

import { getDocs } from "firebase/firestore";
import { dbInstance } from "../../firebaseConfig";

const gridStyles = {
  wordWrap: "break-word",
};

const Confessions = () => {
  const [notes, setNotes] = useState([]);

  const getData = async () => {
    const data = await getDocs(dbInstance);
    setNotes(
      data.docs.map((item) => {
        return { ...item.data() };
      })
    );
    console.log(notes);
  };
  return (
    <>
      <ConfessionBox />
      <PageDivision onClick={getData} />

      {
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
          style={gridStyles}
          spacing={3}
        >
          {notes.map((item) => (
            <Grid style={{ wordWrap: "break-word" }} item xs={12} sm={6}>
              <Note note={item} />
            </Grid>
          ))}
        </Grid>
      }
    </>
  );
};

export default Confessions;
