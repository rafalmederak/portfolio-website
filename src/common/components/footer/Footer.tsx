import Link from "next/link";
import * as Styled from "./Footer.styles";

const Footer = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <p>
          Copyright © 2022 <span>Rafał Męderak</span>
        </p>
        <Link href={"privacy-policy"}>Privacy Policy</Link>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Footer;
