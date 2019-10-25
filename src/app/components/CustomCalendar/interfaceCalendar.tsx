export interface CalendarState {
  initialDate: string;
  finalDate: any;
  daysSelected: {[key: string]: any};
}

export interface Props {
  onAcceptDate: Function;
  selected: boolean;
}

export interface DayInterface {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}
