import React from "react";
import styled from "styled-components";
import "./App.css";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Work from "./components/Work";
import Contact from "./components/Contact";

// internal css
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url("./images/helloWorld.jpg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Work />
      <Contact />
    </Container>
  );
}

export default App;

/* 
<Container>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Hero} />
          <Route path="/Who" component={Who} />
          <Route path="/Work" component={Work} />
          <Route path="/Contact" component={Contact} />
        </Routes>
      </BrowserRouter>
    </Container>
*/
