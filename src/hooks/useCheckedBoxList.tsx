import { useEffect, useState } from "react";
import { useCategoryDataContext } from "./useContext/useCategoryDataContext";

export const useCheckedBoxList = () => {
  const { categoryList } = useCategoryDataContext();
  const [checkedBoxList, setCheckedBoxList] = useState<[string, boolean][]>([]);

  useEffect(() => {
    checkedBoxList.length === 0
      ? setCheckedBoxList(
          categoryList.map((item) => [item.id, true] as [string, boolean])
        )
      : handleCheckedBoxList();
  }, [categoryList]);

  const handleCheckbox = (id: string, value: boolean) => {
    const newCheckedBoxList = checkedBoxList.map((item) =>
      item[0] === id ? [item[0], value] : item
    );
    setCheckedBoxList(newCheckedBoxList as [string, boolean][]);
  };

  const handleCheckedBoxList = () => {
    categoryList.length >= checkedBoxList.length
      ? addCheckedBoxList()
      : deleteCheckedBoxList();
  };

  const addCheckedBoxList = () => {
    categoryList.map((categoryItem) =>
      checkedBoxList.find(
        (checkedItem) => checkedItem[0] === categoryItem.id
      ) === undefined
        ? setCheckedBoxList([...checkedBoxList, [categoryItem.id, true]])
        : []
    );
  };

  const deleteCheckedBoxList = () => {
    checkedBoxList.map((checkedItem) =>
      categoryList.find(
        (categoryItem) => categoryItem.id === checkedItem[0]
      ) === undefined
        ? setCheckedBoxList(
            checkedBoxList.filter((item) => item !== checkedItem)
          )
        : []
    );
  };

  return {
    checkedBoxList,
    handleCheckbox,
  };
};
