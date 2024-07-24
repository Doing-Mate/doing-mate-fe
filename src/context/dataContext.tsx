import { createContext, useState } from "react";

import { ScheduleDataProps, CategoryDataProps } from "./dataInterface";

interface scheduleDataType {
  scheduleList: ScheduleDataProps[];
  setScheduleList: (scheduleList: ScheduleDataProps[]) => void;
}

const ScheduleDataContext = createContext<scheduleDataType>({
  scheduleList: [],
  setScheduleList: () => {},
});

interface categoryDataType {
  categoryList: CategoryDataProps[];
  setCategoryList: (categoryList: CategoryDataProps[]) => void;
}

const CategoryDataContext = createContext<categoryDataType>({
  categoryList: [],
  setCategoryList: () => {},
});

interface DataContextProviderProps {
  children: React.ReactNode;
}
const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [scheduleList, setScheduleList] = useState<ScheduleDataProps[]>([]);
  const [categoryList, setCategoryList] = useState<CategoryDataProps[]>([]);

  return (
    <CategoryDataContext.Provider value={{ categoryList, setCategoryList }}>
      <ScheduleDataContext.Provider value={{ scheduleList, setScheduleList }}>
        {children}
      </ScheduleDataContext.Provider>
    </CategoryDataContext.Provider>
  );
};

export { ScheduleDataContext, CategoryDataContext, DataContextProvider };
