import { createContext, useState } from "react";

import {
  ScheduleDataProps,
  CategoryDataProps,
  BasicScheduleData,
  BasicCategoryData,
} from "./dataInterface";

interface scheduleDataType {
  scheduleList: ScheduleDataProps[];
  setScheduleList: (scheduleList: ScheduleDataProps[]) => void;
}

const ScheduleDataContext = createContext<scheduleDataType>({
  scheduleList: [BasicScheduleData],
  setScheduleList: () => {},
});

interface categoryDataType {
  categoryList: CategoryDataProps[];
  setCategoryList: (categoryList: CategoryDataProps[]) => void;
}

const CategoryDataContext = createContext<categoryDataType>({
  categoryList: BasicCategoryData,
  setCategoryList: () => {},
});

interface DataContextProviderProps {
  children: React.ReactNode;
}
const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [scheduleList, setScheduleList] = useState<ScheduleDataProps[]>([
    BasicScheduleData,
  ]);
  const [categoryList, setCategoryList] =
    useState<CategoryDataProps[]>(BasicCategoryData);

  return (
    <CategoryDataContext.Provider value={{ categoryList, setCategoryList }}>
      <ScheduleDataContext.Provider value={{ scheduleList, setScheduleList }}>
        {children}
      </ScheduleDataContext.Provider>
    </CategoryDataContext.Provider>
  );
};

export { ScheduleDataContext, CategoryDataContext, DataContextProvider };
