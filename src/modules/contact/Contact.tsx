import Header from "@components/header/Header";
import React, { useState } from "react";
import * as Styled from "./Contact.styles";
import { contactList } from "./ContactList";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send message");
  const [successMessage, setSuccessMessage] = useState(false);
  const [failureMessage, setFailureMessage] = useState(false);

  const changeValues = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) =>
    setFormValues((values) => ({ ...values, [e.target.name]: e.target.value }));

  const handleValidation = () => {
    let isValid = true;
    if (
      formValues.name.length <= 0 ||
      formValues.email.length <= 0 ||
      formValues.message.length <= 0
    ) {
      setSuccessMessage(false);
      setFailureMessage(true);
      isValid = false;
    } else {
      setFailureMessage(false);
      isValid = true;
    }
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending...");
      try {
        await fetch("/api/sendgrid", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        });
        setFailureMessage(false);
        setSuccessMessage(true);
        setFormValues({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.error(error);
      }
      setButtonText("Send message");
    }
  };

  return (
    <Styled.Container id="contact">
      <Styled.SectionWrapper>
        <Header title="Contact" subtitle="Let's keep in touch" />
        <p>
          Fill the form to send me a message. Feel free to contact me whenever
          you want.
        </p>
        <Styled.FormContainer>
          <Styled.FormWrapper method="post" onSubmit={handleSubmit}>
            {failureMessage && (
              <Styled.FailureMessage>
                The fields cannot be empty!
              </Styled.FailureMessage>
            )}
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formValues.name}
              required
              onChange={changeValues}
              maxLength={50}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formValues.email}
              required
              onChange={changeValues}
              maxLength={50}
            />
            <textarea
              placeholder="Message"
              name="message"
              value={formValues.message}
              required
              onChange={changeValues}
            />
            <button type="submit">{buttonText}</button>
            {successMessage && (
              <Styled.ModalContainer>
                <Styled.SuccessMessage>
                  <p>The message has been sent!</p>
                  <CheckCircleIcon />
                  <Styled.CloseIcon onClick={() => setSuccessMessage(false)}>
                    x
                  </Styled.CloseIcon>
                </Styled.SuccessMessage>
              </Styled.ModalContainer>
            )}
          </Styled.FormWrapper>
          <Styled.ContactMethodsWrapper>
            {contactList.map((Item) => (
              <Styled.ContactMethodBox
                key={Item.id}
                as="a"
                href={Item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
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
