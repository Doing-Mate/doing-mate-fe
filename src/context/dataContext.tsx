import { createContext, useState } from "react";

import { ScheduleDataProps, CategoryDataProps } from "./dataInterface";

interface allScheduleDataType {
  allScheduleList: ScheduleDataProps[];
  setAllScheduleList: (scheduleList: ScheduleDataProps[]) => void;
}

const AllScheduleDataContext = createContext<allScheduleDataType>({
  allScheduleList: [],
  setAllScheduleList: () => {},
});

interface selectedScheduleDataType {
  selectedScheduleList: ScheduleDataProps[];
  setSelectedScheduleList: (scheduleList: ScheduleDataProps[]) => void;
}

const SeletedScheduleDataContext = createContext<selectedScheduleDataType>({
  selectedScheduleList: [],
  setSelectedScheduleList: () => {},
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
  const [allScheduleList, setAllScheduleList] = useState<ScheduleDataProps[]>(
    []
  );
  const [selectedScheduleList, setSelectedScheduleList] = useState<
    ScheduleDataProps[]
  >([]);
  const [categoryList, setCategoryList] = useState<CategoryDataProps[]>([]);

  return (
    <CategoryDataContext.Provider value={{ categoryList, setCategoryList }}>
      <AllScheduleDataContext.Provider
        value={{ allScheduleList, setAllScheduleList }}
      >
        <SeletedScheduleDataContext.Provider
          value={{ selectedScheduleList, setSelectedScheduleList }}
        >
          {children}
        </SeletedScheduleDataContext.Provider>
      </AllScheduleDataContext.Provider>
    </CategoryDataContext.Provider>
  );
};

export {
  AllScheduleDataContext,
  SeletedScheduleDataContext,
  CategoryDataContext,
  DataContextProvider,
};
