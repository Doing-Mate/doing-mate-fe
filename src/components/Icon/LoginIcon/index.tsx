import { Icon } from "../../common/Icon";

interface LoginIconProps {
  icon: string;
}

export const LoginIcon = ({ icon }: LoginIconProps) => {
  return <Icon sizeType={"medium"} icon={icon} />;
};
