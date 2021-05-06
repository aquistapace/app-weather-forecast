import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.secondaryColor};
  background:${(props)=>props.theme.onBackground};
  border-radius: 4px;
  margin: 0.5rem;

  .card-header {
    margin: 1rem 2.5rem;
  }
  .card-main {
    margin-bottom: 1rem;
  }
  .card-footer {
    margin-bottom: 1rem;
  }
`;
