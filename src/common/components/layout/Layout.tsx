import Nav from "@components/nav/Nav";
import { IChildrenProps } from "./Layout.interfaces";
import * as Styled from "./Layout.styles";
import { useState } from "react";
import Footer from "@components/footer/Footer";

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
      <Styled.MainWrapper>
        <main onClick={closeNav}>{children}</main>
        <Footer />
      </Styled.MainWrapper>
    </Styled.MainContainer>
  );
}
