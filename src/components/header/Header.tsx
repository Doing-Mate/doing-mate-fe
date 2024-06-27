import styled from "styled-components";
import { Logo } from "../common/Logo";
import { SecretaryButton } from "../Button/SecretaryButton";
import MainLogo from "../../logos/logo_main.png";
import UserIcon from "../../icons/ic_user.png";

export const Header = () => {
  return (
    <StyledHeader>
      <MainLogoTitle logoType="main" icon={MainLogo} />
      <SecretaryButton icon={UserIcon} />
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
