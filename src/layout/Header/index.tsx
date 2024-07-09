import styled from "styled-components";
import { Logo } from "../../components/common/Logo";
import { SecretaryButton } from "../../components/Button/SecretaryButton";
import MainLogo from "../../assets/logos/logo_main.png";
import UserIcon from "../../assets/icons/ic_user.png";

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
