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
    opacity: ${({ activeNav }: INavProps) => (activeNav ? "0.2" : "1")};
    width: 100%;
  }
  ${({ theme }) => theme.screens.xl} {
    flex-direction: row;
  }
`;
