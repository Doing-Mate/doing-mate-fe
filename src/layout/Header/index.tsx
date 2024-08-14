import styled from "styled-components";
import { Logo } from "../../components/common/Logo";
import { LogoutButton } from "../../components/Button/LogoutButton";
import { UserNameLabel } from "../../components/Label/UserNameLabel";
import MainLogo from "../../assets/logos/logo_main.png";
import LogoutIcon from "../../assets/icons/ic_logout.png";

interface HeaderProps {
  userName: string;
  onLogout: () => void;
}

export const Header = ({ userName, onLogout }: HeaderProps) => {
  return (
    <StyledHeader>
      <MainLogoTitle logoType="main" icon={MainLogo} />
      <LogoutButton icon={LogoutIcon} onClick={onLogout} />
      <UserNameLabel text={userName + " 님"} />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: relative;
  border-radius: 0 0 35px 35px;
  box-shadow: 0px 5px 4px #00000042;
`;

const MainLogoTitle = styled(Logo)`
  margin: 20px 30px;
`;
