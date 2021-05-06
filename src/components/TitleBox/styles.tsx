import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-size: 1rem;
  width: 25rem;
  margin: 0.5rem;
  border-left: 10px solid ${(props) => props.theme.primaryColor};
  padding: 0.5rem;
  background: ${(props) => props.theme.secondaryColor};
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }
`;
