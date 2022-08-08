import Nav from "@components/nav/Nav";
import { IChildrenProps } from "./Layout.interfaces";
import * as Styled from "./Layout.styles";
import { useState } from "react";

export default function Layout({ children }: IChildrenProps) {
  const [activeNav, setActiveNav] = useState(false);

  const handleActiveNav = () => {
    setActiveNav(!activeNav);
  };

  const closeNav = () => {
    activeNav && setActiveNav(false);
  };

  return (
    <Styled.MainContainer activeNav={activeNav}>
      <Styled.OpenNavButton onClick={handleActiveNav} />
      <Nav activeNav={activeNav} handleActiveNav={handleActiveNav} />
      <main onClick={closeNav}>{children}</main>
    </Styled.MainContainer>
  );
}
