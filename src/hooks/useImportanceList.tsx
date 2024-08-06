import { useEffect, useState } from "react";

export const useImportanceList = () => {
  const [checkedImportanceList, setCheckedImportanceList] = useState<
    [string, boolean][]
  >([]);

  useEffect(() => {
    checkedImportanceList.length === 0 &&
      setCheckedImportanceList(
        new Array(5)
          .fill(0)
          .map(
            (item, index) =>
              ["starLevel_" + (index + 1).toString(), true] as [string, boolean]
          )
      );
  }, []);

  const handleCheckImportance = (id: string, value: boolean) => {
    const newCheckedImportanceList = checkedImportanceList.map((item) =>
      item[0] === id ? [item[0], value] : item
    );
    setCheckedImportanceList(newCheckedImportanceList as [string, boolean][]);
  };

  return {
    checkedImportanceList,
    handleCheckImportance,
  };
};
