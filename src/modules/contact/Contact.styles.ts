import styled from "styled-components";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  padding: 3rem 4rem;
  border-top: 1px solid ${({ theme }) => theme.color.gray200};
  min-height: calc(100vh - 12rem);
  justify-content: center;

  ${({ theme }) => theme.screens.md} {
    padding: 6rem;
  }
  ${({ theme }) => theme.screens.xl} {
    padding: 6rem 10rem;
  }
  ${({ theme }) => theme.screens.xxl} {
    padding: 10rem 20rem 12rem 20rem;
    align-items: center;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 116rem;
  width: 100%;
  gap: 6rem;
  p {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ theme }) => theme.screens.lg} {
    flex-direction: row;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 3.8rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
  padding-bottom: 6rem;

  input {
    padding: 0 1.6rem;
    width: 100%;
    max-width: 42rem;
    height: 3.8rem;
    border: 1px solid ${({ theme }) => theme.color.gray200};
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  textarea {
    padding: 0.8rem 1.6rem;
    width: 100%;
    max-width: 42rem;
    height: 20rem;
    border: 1px solid ${({ theme }) => theme.color.gray200};
    font-family: "Poppins";
    resize: none;
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  button {
    color: ${({ theme }) => theme.color.purple};
    background: none;
    border: 1px solid ${({ theme }) => theme.color.purple};
    padding: 0.4rem 1.2rem;
    border-radius: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    width: 20rem;
    transition: all 0.3s ease-out;

    :hover {
      background: ${({ theme }) => theme.color.purple};
      color: ${({ theme }) => theme.color.white};
      transform: translateY(-0.5rem);
    }
  }

  ${({ theme }) => theme.screens.lg} {
    border-bottom: 0;
    padding-bottom: 0;
    border-right: 1px solid ${({ theme }) => theme.color.gray200};
    padding-right: 6rem;
    flex: 3;
  }
`;

export const ContactMethodsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 3rem 0;
  margin-top: 6rem;

  ${({ theme }) => theme.screens.lg} {
    flex: 2;
    margin-top: 0;
    margin-left: 6rem;
  }
`;

export const ContactMethodBox = styled.div`
  display: flex;
  p {
    margin-left: 1.2rem;
  }
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const SuccessMessage = styled.div`
  width: 80%;
  height: 60%;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.color.gray200};
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  position: relative;
  gap: 2rem;
  p {
    text-align: center;
    font-size: 2.2rem;
  }
  svg {
    font-size: 6rem;
    color: ${({ theme }) => theme.color.purple};
  }

  ${({ theme }) => theme.screens.xl} {
    width: 40vw;
    height: 50vh;
  }
`;

export const CloseIcon = styled(HighlightOffIcon)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 28px !important;
`;

export const FailureMessage = styled.p`
  margin-top: 0.8rem;
  color: red;
`;
