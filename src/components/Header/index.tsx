import React from "react";

import { Container } from "./styles";

interface HeaderProps {
  titlePage?: any;
}
const Header: React.FC<HeaderProps> = ({ children, titlePage }) => {
  return (
    <Container>
      <div>{children}</div>
      <div>
        <p>{titlePage}</p>
      </div>
    </Container>
  );
};

export default Header;
