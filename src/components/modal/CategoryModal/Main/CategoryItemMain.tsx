import { CategoryTitleInputText } from "../../../InputText/CategoryTitleInputText";
import { ColorPicker } from "../../../common/ColorPicker";
import { CategoryDataProps } from "../../../../context/dataInterface";

interface CategoryItemProps {
  data: CategoryDataProps | undefined;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: (value: string) => void;
}

export const CategoryItemMain = ({
  data,
  handleTitleChange,
  handleColorChange,
}: CategoryItemProps) => {
  return (
    <div>
      <CategoryTitleInputText text={data?.title} onChange={handleTitleChange} />
      <ColorPicker
        categoryColor={data?.color}
        onChangeData={(value) => handleColorChange(value)}
      />
    </div>
  );
};
