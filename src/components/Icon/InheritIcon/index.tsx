import { Icon } from "../../common/Icon";

interface InheritIconProps {
  icon: string;
}

export const InheritIcon = ({ icon }: InheritIconProps) => {
  return <Icon sizeType={"inherit"} icon={icon} />;
};
