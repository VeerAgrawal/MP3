import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import styled from "styled-components";

import { Routes, Route } from "react-router-dom";
import Home from "./mains/Home";
import Education from "./mains/Education";
import Experience from "./mains/Experience";
import Certifications from "./mains/Certifications";
import Achievements from "./mains/Achievements";
import Projects from "./mains/Projects";

const ContentWrap = styled.div`
  @media screen and (min-width: 1000px) {
    display: flex;
    align-items: flex-start;
  }
`;


const MainWrap = styled.main`
  width: 100%;
  padding: 2vh;
  background: #ffffff;
  margin: 2vh 0;

  @media screen and (min-width: 1000px) {
    width: 70%;             
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function Root() {
  return (
    <>
      <Header />

      <ContentWrap>
        <Nav/>
        <MainWrap>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/projects" element={<Projects />} />
            </Routes>
        </MainWrap>
      </ContentWrap>

      <Footer />
    </>
  );
}
