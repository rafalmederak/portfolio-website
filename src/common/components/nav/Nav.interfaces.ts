export interface INavProps {
  activeNav: boolean;
  setActiveNav?: React.Dispatch<React.SetStateAction<boolean>>;
  handleActiveNav?: () => void;
}
