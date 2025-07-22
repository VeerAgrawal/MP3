import styled from "styled-components";

const ProfilePhoto = styled.img`
  width: 30%;
  border-radius: 50%;
`;


export default function Home() {
  return (
    <>
      <section id="hero">
        <ProfilePhoto id="profile" src="me.JPG" alt="Veer smiling" />
        <h2>Computer Science Student – Veer Agrawal</h2>
        <p>
          Hi — I’m <strong>Veer</strong>. I’m currently learning front-end
          development in CS-392.
        </p>
      </section>
    </>
  );
}
