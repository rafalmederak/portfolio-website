import React from "react";
import * as Styled from "./Header.styles";
import { IHeaderProps } from "./Header.interfaces";

const Header = ({ title, subtitle }: IHeaderProps) => {
  return (
    <Styled.Container>
      <h2>{title}</h2>
      <Styled.HeadingBox>
        <p>{subtitle}</p>
      </Styled.HeadingBox>
    </Styled.Container>
  );
};

export default Header;
