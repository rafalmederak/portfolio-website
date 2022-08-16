import Header from "@components/header/Header";
import * as Styled from "./Contact.styles";
import { contactList } from "./ContactList";

const Contact = () => {
  return (
    <Styled.Container>
      <Styled.SectionWrapper>
        <Header title="Contact" subtitle="Let's keep in touch" />
        <p>
          Fill the form to send me a message. Feel free to contact me whenever
          you want.
        </p>
        <Styled.FormContainer>
          <Styled.FormWrapper method="post">
            <input type="text" placeholder="Name" name="name" required />
            <input type="email" placeholder="Email" name="email" required />
            <textarea placeholder="Message" name="message" required />
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
