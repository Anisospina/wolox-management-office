import {monthName, dayWeekName} from '@utils/date';
import {capitalize} from '@utils/stringsUtils';

export const getMonthNames = () => {
  const month = [];

  for (let i = 1; i <= 12; i += 1) {
    month.push(capitalize(monthName(i)));
  }
  return month;
};

export const getDayLetter = () => {
  const days = [];

  for (let i = 1; i <= 7; i += 1) {
    days.push(
      dayWeekName(i)
        .toUpperCase()
        .substring(0, 1),
    );
  }

  return days;
};
