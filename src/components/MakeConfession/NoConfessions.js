import React from "react";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Light = styled(SentimentDissatisfiedIcon)`
  font-size: 15rem;
  color: #5f5f5f;
`;

const Text = styled(Typography)`
  color: 80868b;
  font-size: 2rem;
  text-align: center;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1vh;
`;

const NoConfessions = () => {
  return (
    <>
      <Container>
        <Light />
        <Text>No confessions as of now....</Text>
      </Container>
    </>
  );
};

export default NoConfessions;
