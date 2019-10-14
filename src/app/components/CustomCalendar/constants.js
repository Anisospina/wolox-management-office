import {strings} from './i18n';

export const CONFIG_CALENDAR = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  dayNames: [
    strings.SUNDAY(),
    strings.MONDAY(),
    strings.TUESDAY(),
    strings.WEDNESDAY(),
    strings.THURSDAY(),
    strings.FRIDAY(),
    strings.SATURDAY(),
  ],
  dayNamesShort: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
};

export const VARIABLES = {
  days: 'days',
  left: 'left',
};
export const PERIOD = 'period';
export const FORMAT_DATE = 'YYYY-MM-DD';
export const DEFAULT_LOCALE = 'en';
