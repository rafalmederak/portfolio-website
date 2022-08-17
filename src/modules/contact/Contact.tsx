import Header from "@components/header/Header";
import React, { useState } from "react";
import * as Styled from "./Contact.styles";
import { contactList } from "./ContactList";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeValues = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) =>
    setFormValues((values) => ({ ...values, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendgrid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (!res.ok) {
        setFormValues({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Styled.Container>
      <Styled.SectionWrapper>
        <Header title="Contact" subtitle="Let's keep in touch" />
        <p>
          Fill the form to send me a message. Feel free to contact me whenever
          you want.
        </p>
        <Styled.FormContainer>
          <Styled.FormWrapper method="post" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              onChange={changeValues}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={changeValues}
            />
            <textarea
              placeholder="Message"
              name="message"
              required
              onChange={changeValues}
            />
            <button type="submit">Send a message</button>
          </Styled.FormWrapper>
          <Styled.ContactMethodsWrapper>
            {contactList.map((Item) => (
              <Styled.ContactMethodBox key={Item.id}>
                <Item.icon />
                <p>{Item.text}</p>
              </Styled.ContactMethodBox>
            ))}
          </Styled.ContactMethodsWrapper>
        </Styled.FormContainer>
      </Styled.SectionWrapper>
    </Styled.Container>
  );
};

export default Contact;
