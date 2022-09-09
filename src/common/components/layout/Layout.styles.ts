import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { INavProps } from "@components/nav/Nav.interfaces";

export const OpenNavButton = styled(MoreVertIcon)`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 28px;
  ${({ theme }) => theme.screens.xl} {
    display: none;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  main {
    width: 100%;
    transition: opacity 0.3s ease;

    ${({ theme }) => theme.screens.md} {
      opacity: ${({ activeNav }: INavProps) => (activeNav ? "0.2" : "1")};
    }

    ${({ theme }) => theme.screens.xl} {
      transition: none;
      opacity: 1;
    }
  }
  ${({ theme }) => theme.screens.xl} {
    flex-direction: row;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;
