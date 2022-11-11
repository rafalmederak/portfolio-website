import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import Header from '@components/header/Header';

import * as Styled from './Contact.styles';
import { contactList } from './ContactList';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const formValues = {
    name: '',
    email: '',
    message: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: formValues,
  });

  const [buttonText, setButtonText] = useState('Send message');
  const [successMessage, setSuccessMessage] = useState(false);

  const onSubmit = async (data: FormData) => {
    setButtonText('Sending...');
    try {
      await fetch('/api/sendgrid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setSuccessMessage(true);
    } catch (error) {
      console.error(error);
    }
    setButtonText('Send message');
    reset(formValues);
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
          <Styled.FormWrapper method="post" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                {...register('name', {
                  required: 'Name is required',
                  maxLength: 50,
                })}
                placeholder="Name"
              />
              {errors.name?.message && (
                <Styled.FailureMessage>
                  {errors.name?.message}
                </Styled.FailureMessage>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                  maxLength: 50,
                })}
              />
              {errors.email?.message && (
                <Styled.FailureMessage>
                  {errors.email?.message}
                </Styled.FailureMessage>
              )}
            </div>

            <div>
              <textarea
                placeholder="Message"
                {...register('message', {
                  required: 'Message is required',
                  maxLength: 50,
                })}
              />
              {errors.message?.message && (
                <Styled.FailureMessage>
                  {errors.message?.message}
                </Styled.FailureMessage>
              )}
            </div>

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
