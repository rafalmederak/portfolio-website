import { IChildrenProps } from "./Layout.interfaces";
import * as Styled from "./Layout.styles";

export default function Layout({ children }: IChildrenProps) {
  return (
    <Styled.MainContainer>
      <main>{children}</main>
    </Styled.MainContainer>
  );
}
