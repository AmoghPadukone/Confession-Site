import { useState } from "react";

import React from "react";
import ConfessionBox from "./ConfessionBox";
import PageDivision from "../UI/PageDivision";
import Note from "./Note";

import { Grid } from "@mui/material";

import { getDocs } from "firebase/firestore";
import { dbInstance } from "../../firebaseConfig";

const gridStyles = {
  padding: "0 1rem",
};

const Confessions = () => {
  const [notes, setNotes] = useState([]);

  // const { notes } = useContext(DataContext);
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
        >
          {notes.map((item) => (
            <Grid item xs="auto" sm={4} md={4}>
              <Note note={item} />
            </Grid>
          ))}
        </Grid>
      }
    </>
  );
};

export default Confessions;
