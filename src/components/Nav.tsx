import { Link } from "react-router-dom"; 
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 30%;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;          

  @media screen and (max-width: 1000px) {
    flex-direction: row;        
  }

  li { margin: 1vh; }

  a {
    text-decoration: none;
    color: #0b6cff;
    font-weight: 600;
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <StyledList>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </StyledList>
    </StyledNav>
  );
}
