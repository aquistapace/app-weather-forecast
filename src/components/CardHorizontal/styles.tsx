import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.secondaryColor};
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
  border-radius: 4px;
  padding: 0 1rem;
  background: ${(props) => props.theme.onBackground};
  div {
    display: flex;
    align-items: center;
    margin: 0.2rem;
    p {
      margin-left: 1rem;
    }
    span {
      font-weight: bold;
    }
  }
`;
