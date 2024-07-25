import { CategoryTitleInputText } from "../../../InputText/CategoryTitleInputText";
import { ColorPicker } from "../../../common/ColorPicker";
import { CategoryDataProps } from "../../../../context/dataInterface";

interface CategoryItemProps {
  data?: CategoryDataProps;
}

export const CategoryItemMain = ({ data }: CategoryItemProps) => {
  return (
    <div>
      <CategoryTitleInputText text={data?.title} />
      <ColorPicker categoryColor={data?.color} />
    </div>
  );
};
