import styled, { css } from "styled-components";

interface LogoProps {
  logoType: "main" | "login";
  icon: string;
  children?: React.ReactNode;
}

export const Logo = ({ logoType, icon, children, ...props }: LogoProps) => {
  return (
    <StyledLogo logoType={logoType} src={icon} {...props}>
      {children}
    </StyledLogo>
  );
};

type StyledLogoProps = Omit<LogoProps, "icon">;

const StyledLogo = styled.img<StyledLogoProps>`
  margin: auto;
  ${({ logoType }) => LogoType[logoType]}
`;

const mainLogo = css`
  width: 400px;
  height: 50px;
`;

const loginLogo = css`
  width: 285px;
  height: 150px;
`;

const LogoType = {
  main: mainLogo,
  login: loginLogo,
};
