import React from "react";
import styled from "styled-components";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";


const postImages = [
  post1,
  post2
];

const GridWrapper = styled.div`
  margin-top: 3px;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(3, 1fr);

  img {
    max-width: 100%;
  }
`;

function PostGrid() {
  return (
    <GridWrapper>
      {postImages.map((postImage) => (
        <img src={postImage} alt="" height={400} width={500} />
      ))}

    </GridWrapper>
  );
}

export default PostGrid;
