import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 2vh;
  background: #c6f48f;
  text-align: center;

  @media screen and (min-width: 750px) {
    text-align: left;        /* ≥ 750 px */
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Veer Agrawal</h1>
      <p>My RESUME</p>
    </StyledHeader>
  );
}
