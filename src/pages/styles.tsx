import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

export const SectionPrimary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;
export const CardSunriseSunset = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.background};
  background: ${(props) => props.theme.secondaryColor};
  border-radius: 4px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.5rem;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
export const SectionContent = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: column;

  p {
    font-size: 2rem;
  }
  span {
    font-size: 4rem;
    font-weight: bold;
    color: ${(props) => props.theme.primaryColor};
  }
  div {
    display: flex;
    flex: row;
    align-items: center;
    p {
      font-size: 1.15rem;
      padding-left: 1rem;
      text-transform: capitalize;
    }
  }
`;

export const SectionSecondary = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerCardsVertical = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.4rem 0.6rem;
    width: 100%;
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  }
`;
