import {buildTranslations, buildConstants} from '@utils/i18nUtils';

const namespace = 'calendarModalFilter';
const translations = {
  es: {
    january: 'Enero',
    febrary: 'Febrero',
    march: 'Marzo',
    april: 'Abril',
    may: 'Mayo',
    june: 'Junio',
    july: 'Julio',
    august: 'Agosto',
    september: 'Septiembre',
    october: 'Octubre',
    november: 'Noviembre',
    december: 'Diciembre',
    monday: 'Lunes',
    tuesday: 'Martes',
    wednesday: 'Miércoles',
    thursday: 'Jueves',
    friday: 'Viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',
    title: 'Seleccionar inicio y final',
    filter: 'Filtrar',
  },
};

export const strings = buildConstants(translations, namespace, 'es');
export default buildTranslations(translations, namespace);
