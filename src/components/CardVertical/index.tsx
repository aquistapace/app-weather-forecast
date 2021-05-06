import React from "react";

import { Container } from "./styles";

interface CardVerticalProps {
  title?: any;
  description?: any;
  icon?: any;
}
const CardVertical: React.FC<CardVerticalProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Container>
      <div className="card-header">{title}</div>
      <div className="card-main">{icon}</div>
      <div className="card-footer">{description}</div>
    </Container>
  );
};

export default CardVertical;
