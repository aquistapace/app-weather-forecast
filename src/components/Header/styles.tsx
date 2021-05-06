import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
  width: 100%;

  p {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    color: ${(props) => props.theme.primaryColor};
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 0 auto;
    margin: 1rem 0;
    width: 100%;
  }
`;
