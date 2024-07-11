export interface ScheduleDataProps {
  id: string;
  category_id: string;
  title: string;
  start: string;
  end: string;
  repetition: string;
  importance: number;
  place?: string;
  comment?: string;
  color?: string;
}

export const BasicScheduleData = {
  id: undefined,
  category_id: undefined,
  title: undefined,
  start: undefined,
  end: undefined,
  repetition: undefined,
  importance: undefined,
  place: undefined,
  comment: undefined,
  color: undefined,
};

export interface CategoryDataProps {
  id: string;
  title: string;
  color: string;
}

export const BasicCategoryData = [
  {
    id: "",
    title: "",
    color: "",
  },
];
