import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 2vh;
  background: #ffffff;
  text-align: center;

  a { color: #0b6cff; }
`;


export default function Footer() {
  return (
    <StyledFooter>
      <p>Rights Reserved by Veer - Credits &copy; </p>
    </StyledFooter>
  );
}
