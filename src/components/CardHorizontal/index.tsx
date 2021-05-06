import React from "react";

import { Container } from "./styles";

interface CardHorizontalProps {
  icon?: any;
  description?: any;
  value?: any;
}
const CardHorizontal: React.FC<CardHorizontalProps> = ({
  icon,
  description,
  value,
}) => {
  return (
    <Container>
      <div>
        <div>{icon}</div>
        <div>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <span>{value}</span>
      </div>
    </Container>
  );
};

export default CardHorizontal;
