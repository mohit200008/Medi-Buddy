import React from "react";
import BodyCard from "./BodyCard";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  margin: 30px auto;
  margin-Left: 18px;
  padding: 5rem;
  box-sizing: border-box;
  background-color: #f9f9f9;
  h1 {
    font-size: 150%;
    font-weight: bolder;
  }

  // media quries
  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 100%;
    }
  }
`;

function HomePageBody() {
  return (
    <Container>
      <h1>Why health is essential?</h1>
      <BodyCard
        img="https://i.pinimg.com/originals/8a/28/8f/8a288fc55156d4dceffe0b47cb9c89ea.jpg"
        para="A relative state in which one is able to function well physically, mentally, socially, and spiritually in order to express the full range of one's unique potentialities within the environment in which one is living. In the words of René Dubos, “health is primarily a measure of each person's ability to do and become what he wants to become.” 

        Current views of health and illness recognize health as more than the absence of disease. Realizing that humans are dynamic beings whose state of health ca
        Current views of health and illness recognize health as more than the absence of disease. Realizing that humans are dynamic beings whose state of health can change from day to day or even from hour to hour, leaders in the health field suggest that it is better to think of each person as being located on a graduated scale or continuous spectrum (continuum) ranging from obvious dire illness through the absence of discernible disease to a state of optimal functioning in every aspect of one's life. "
        id={1}
      />
      <BodyCard
        img="https://i.pinimg.com/originals/a3/04/05/a30405aa47967c5b9ab46896312df093.jpg"
        heading="Stay Healthy"
        para="Using this web application women can easily keep tack of their health."
        id={2}
      />
    </Container>
  );
}

export default HomePageBody;
