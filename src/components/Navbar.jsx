import React from "react";
import styled from "styled-components";

// internall css
const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  @media only screen and (max-width: 760px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 720px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
`;

const Logo = styled.img`
  width: 43px;
  height: 40px;
  display: flex;
  border-radius: 50%;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: white;
  list-style-type: none;
  &:hover {
    color: #da4ea2;
    transition: 0.4s all ease;
  }
`;

const Icons = styled.div`
  height: auto;
  width: auto;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: #da4ea2;
  padding: 0.4rem;
  cursor: pointer;
  margin: 0.4rem;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./images/JongGun.jpg" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Who</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Button>Hire Now!</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
