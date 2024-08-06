export interface ScheduleDataProps {
  id: string;
  category_id: string;
  title: string;
  start: string;
  end: string;
  repetition: string;
  allDay: boolean;
  importance: number;
  place?: string;
  comment?: string;
  color?: string;
}

export interface CategoryDataProps {
  id: string;
  title: string;
  color: string;
}
