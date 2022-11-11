import React from 'react';

import { IHeaderProps } from './Header.interfaces';
import * as Styled from './Header.styles';

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
