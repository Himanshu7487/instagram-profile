import React from "react";
import styled from "styled-components";
import highlight1 from "../assets/highlight1.jpg";


let highlightsArray = [
  { src: highlight1, label: "Highlights" },
  
];

const Wrapper = styled.div`
  display: flex;
  padding: 0 20px;
`;

const HighLightWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  :not(:last-child) {
    margin-right: 25px;
  }
`;

const HighLightImage = styled.img`
  max-width: 200px;
  border-radius: 50%;
  border: 1px solid #919191;
  padding: 4px;
`;

const HighLightLabel = styled.span`
  font-size: 12px;
  white-space: nowrap;
  margin-top: 6px;
`;

function Highlights() {
  return (
    <Wrapper>
      {highlightsArray.map((highlight) => (
        <HighLightWrapper>
          <HighLightImage src={highlight.src} />
          <HighLightLabel>{highlight.label}</HighLightLabel>
        </HighLightWrapper>
      ))}
    </Wrapper>
  );
}

export default Highlights;
