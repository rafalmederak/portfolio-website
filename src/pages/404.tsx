import React from "react";
import styled from "styled-components";
import NotFoundIcon from "@content/images/404.svg";

const StyledNotFound = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 3rem 4rem;
  svg {
    width: 30rem;
  }
  p {
    margin-top: 6rem;
    color: ${({ theme }) => theme.color.purple};
    font-size: ${({ theme }) => theme.fontSize.heading0};
  }
  a {
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.fontSize.heading4};
  }

  ${({ theme }) => theme.screens.md} {
    padding: 6rem;
    svg {
      width: 40rem;
    }
  }
  ${({ theme }) => theme.screens.xl} {
    padding: 6rem 10rem;
    svg {
      width: 50rem;
    }
  }
  ${({ theme }) => theme.screens.xxl} {
    padding: 10rem 20rem 12rem 20rem;
  }
`;

const NotFound = () => {
  return (
    <StyledNotFound>
      <NotFoundIcon />
      <p>404</p>
      <a href="/">Go to the home page</a>
    </StyledNotFound>
  );
};

export default NotFound;
