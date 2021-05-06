import React from "react";
import { Container } from "./styles";

const TitleBox: React.FC = ({ children }) => {
  return (
    <Container>
      <span>{children}</span>
    </Container>
  );
};

export default TitleBox;
