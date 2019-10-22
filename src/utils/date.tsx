import moment from 'moment';
import timezone from 'moment-timezone';
import 'moment/min/locales.min';
import Config from 'react-native-config';

export const DEFAULT_LOCALE = Config.REACT_APP_CURRENT_LANGUAGE;
moment.locale(DEFAULT_LOCALE);
const TIME_ZONE = process.env.REACT_APP_TIME_ZONE;

export const DATE_NAMES = {
  DAYS: 'days',
};

export const DATE_FORMAT = {
  DATE: 'DD/MM/YYYY',
  TIME: 'HH:mm',
  TIME_MS: 'HH:mm:ss.SSS',
  DATE_TIME: 'DD/MM/YYYY, HH:mm',
  INPUT_FORM_DATE: 'YYYY-MM-DD',
  VALIDATION_FORM_DATE: 'yyyy-mm-dd',
  DATE_WITHOUT_YEAR: 'DD/MM',
  MONTH_FULL_NAME: 'MMMM',
  MONTH_NUMBER: 'M',
  DAYS_SHORT_NAME: 'dd',
  DAYS_NUMBER: 'E',
};
export const getDate = (dateTime, format = DATE_FORMAT.DATE) => moment.utc(dateTime).format(format);
export const getTime = (dateTime, format = DATE_FORMAT.TIME) => moment.utc(dateTime).format(format);
export const getDateTime = (dateTime, format = DATE_FORMAT.DATE_TIME) => moment.utc(dateTime).format(format);
export const getDateTimezone = (dateTime, format = DATE_FORMAT.DATE) =>
  timezone.tz(dateTime, TIME_ZONE).format(format);
export const getTimeTimezone = (dateTime, format = DATE_FORMAT.TIME) =>
  timezone.tz(dateTime, TIME_ZONE).format(format);
export const getDateTimeTimezone = (dateTime, format = DATE_FORMAT.DATE_TIME) =>
  timezone.tz(dateTime, TIME_ZONE).format(format);
export const dateTimeIsAfter = (beforeDateTime, afterDateTime) =>
  moment(afterDateTime).isAfter(beforeDateTime);
export const getFirstDayOfMonth = (format = DATE_FORMAT.INPUT_FORM_DATE) =>
  moment()
    .startOf('month')
    .format(format);

export const monthName = (monthNumber, format = DATE_FORMAT.MONTH_FULL_NAME) =>
  moment(monthNumber, DATE_FORMAT.MONTH_NUMBER).format(format);

export const dayWeekName = (dayNumber, format = DATE_FORMAT.DAYS_SHORT_NAME) =>
  moment(dayNumber, DATE_FORMAT.DAYS_NUMBER).format(format);

export const addDate = (date, unit, value) =>
  moment(date)
    .add(unit, value)
    .format(DATE_FORMAT.INPUT_FORM_DATE);
