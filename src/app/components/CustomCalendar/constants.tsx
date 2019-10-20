import i18next from 'i18next';
import moment from 'moment';

export const CONFIG_CALENDAR = {
  monthNames: [
    i18next.t('calendar:january'),
    i18next.t('calendar:febrary'),
    i18next.t('calendar:march'),
    i18next.t('calendar:april'),
    i18next.t('calendar:may'),
    i18next.t('calendar:june'),
    i18next.t('calendar:july'),
    i18next.t('calendar:august'),
    i18next.t('calendar:september'),
    i18next.t('calendar:october'),
    i18next.t('calendar:november'),
    i18next.t('calendar:december'),
  ],
  dayNames: [
    i18next.t('calendar:sunday'),
    i18next.t('calendar:monday'),
    i18next.t('calendar:tuesday'),
    i18next.t('calendar:wednesday'),
    i18next.t('calendar:thursday'),
    i18next.t('calendar:friday'),
    i18next.t('calendar:saturday'),
  ],
  dayNamesShort: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
};

export const UNITS: {[key: string]: moment.unitOfTime.DurationConstructor} = {
  days: 'days',
};

export const VARIABLES = {
  left: 'left',
};
export const PERIOD = 'period';
export const FORMAT_DATE = 'YYYY-MM-DD';
export const DEFAULT_LOCALE = 'es';
