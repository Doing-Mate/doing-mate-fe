import theme from "../../styles/theme";
import { CRUDButton } from "./CRUDButton";

const colorType = [theme.colors.secondary, theme.colors.primary];
const hoverColorType = ["#e498ac", "#92b5ec"];

interface CRUDButtonProps {
  text?: string;
  onClick?: () => void;
}

interface CRUDButtonListProps {
  footerData: CRUDButtonProps[];
}

export const CRUDButtonList = ({ footerData }: CRUDButtonListProps) => {
  const BtnList = footerData.map((item, index) => {
    return (
      <CRUDButton
        key={"footerBtn_0" + index.toString}
        text={item.text}
        colorType={colorType[index]}
        hoverColorType={hoverColorType[index]}
        onClick={item.onClick}
      />
    );
  });
  return BtnList;
};
