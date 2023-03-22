import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Map from "./Map";
import { useState } from "react";
import { useRef } from "react";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  color: white;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const Left = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 420px;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 15px;
  background-color: white;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  padding: 17px;
`;

const TextArea = styled.textarea`
  padding: 18px;
  background-color: white;
  border: none;
  border-radius: 5px;
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  // if submit button has clickced, text on the row has sended to target or user
  const handleSubmit = (e) => {
    e.preventDefault();

    //  using emailjs tools
    emailjs.sendForm("service_ngtqjyi", "template_xdbh4zs", ref.current, "hxHvPjPEiWt_dinms").then(
      (result) => {
        console.log(result.text);
        setSuccess(true);
      },
      (error) => {
        console.log(error.text);
        setSuccess(false);
      }
    );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Enter Your Name" name="name" />
            <Input placeholder="Enter Your Email" name="email" />
            <TextArea placeholder="Write Your Message" rows={5} name="message" />
            <Button type="submit">Send</Button>
            {/* if button clicked, show */}
            {success && "your message has been send, We'll get back you soon"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
