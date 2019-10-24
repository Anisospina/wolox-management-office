import React, {Component} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {Image} from 'react-native';
import {CERULEAN, WHITE, BOMBAY, MALIBU, LILYWHITE} from '@constants/colors';
import prevImg from '@assets/left.png';
import nextImg from '@assets/right.png';
import {addDate, DATE_NAMES, DEFAULT_LOCALE} from '@utils/date';

import {Props, CalendarState, DayInterface} from './interfaceCalendar';
import {CONFIG_CALENDAR, CALENDAR_CONSTS} from './constants';
import {myTheme} from './styles';

LocaleConfig.locales[DEFAULT_LOCALE] = CONFIG_CALENDAR;
LocaleConfig.defaultLocale = DEFAULT_LOCALE;

class CustomCalendar extends Component<Props, CalendarState> {
  state = {
    initialDate: null,
    finalDate: null,
    daysSelected: null
  };

  handleClickModalFilter = (day: DayInterface) => {
    const {initialDate, finalDate} = this.state;
    if (!initialDate || finalDate || day.dateString < initialDate) {
      this.setState(
        {initialDate: day.dateString, finalDate: null, daysSelected: null},
        this.handleInitialDate
      );
    } else this.setState({finalDate: day.dateString, daysSelected: null}, this.calculateRange);
  };

  handleInitialDate = () => {
    const {initialDate} = this.state;
    const daysSelected = {
      [initialDate]: {
        startingDay: true,
        endingDay: true,
        selected: true,
        color: MALIBU,
        textColor: WHITE
      }
    };
    this.setState({daysSelected});
  };

  calculateRange = () => {
    const {initialDate, finalDate} = this.state;
    if (initialDate && finalDate && finalDate > initialDate) {
      const daysSelected: any = {
        [initialDate]: {startingDay: true, color: CERULEAN, textColor: WHITE}
      };
      let currentDate: string;
      while (currentDate !== finalDate) {
        const date = currentDate || initialDate;
        currentDate = addDate(date, 1, DATE_NAMES.DAYS);
        daysSelected[currentDate] = {selected: true, color: LILYWHITE, textColor: MALIBU};
      }
      daysSelected[finalDate] = {endingDay: true, color: CERULEAN, textColor: WHITE};
      this.setState({daysSelected});
    }
  };

  handleSelectRange = () => {
    const {initialDate, finalDate} = this.state;
    const {onAcceptDate} = this.props;
    onAcceptDate({initialDate, finalDate});
  };

  renderArrow = direction => (
    <Image
      style={{tintColor: BOMBAY}}
      resizeMode="contain"
      source={direction === CALENDAR_CONSTS.left ? prevImg : nextImg}
    />
  );

  render() {
    const {daysSelected} = this.state;
    return (
      <Calendar
        onDayPress={this.handleClickModalFilter}
        markedDates={daysSelected}
        markingType={CALENDAR_CONSTS.period}
        theme={myTheme}
        renderArrow={this.renderArrow}
      />
    );
  }
}

export default CustomCalendar;
