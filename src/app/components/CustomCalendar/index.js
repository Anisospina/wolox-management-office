import React, {Component} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import {cerulean, white} from '@constants/colors';
import moment from 'moment';
import prevImg from '@assets/previous';
import nextImg from '@assets/next';

import {DEFAULT_LOCALE, CONFIG_CALENDAR, FORMAT_DATE, PERIOD, VARIABLES} from './constants';
import {myTheme} from './styles';

LocaleConfig.locales[DEFAULT_LOCALE] = CONFIG_CALENDAR;
LocaleConfig.defaultLocale = DEFAULT_LOCALE;

class CustomCalendar extends Component {
  state = {
    initialDate: null,
    finalDate: null,
    daysSelected: null,
  };

  handleClickModalFilter = day => {
    const {initialDate, finalDate} = this.state;
    if (!initialDate || finalDate || day.dateString < initialDate) {
      this.setState(
        {initialDate: day.dateString, finalDate: null, daysSelected: null},
        this.handleInitialDate,
      );
    } else {
      this.setState({finalDate: day.dateString, daysSelected: null}, this.calculateRange);
    }
  };

  handleInitialDate = () => {
    const {initialDate} = this.state;
    const daysSelected = {
      [initialDate]: {startingDay: true, endingDay: true, selected: true, color: '#333', textColor: white},
    };
    this.setState({daysSelected});
  };

  calculateRange = () => {
    const {initialDate, finalDate} = this.state;
    if (initialDate && finalDate && finalDate > initialDate) {
      const daysSelected = {
        [initialDate]: {startingDay: true, color: cerulean, textColor: white},
      };
      let currentDate;
      while (currentDate !== finalDate) {
        currentDate = moment(currentDate || initialDate)
          .add(1, VARIABLES.days)
          .format(FORMAT_DATE);
        daysSelected[currentDate] = {selected: true, color: cerulean};
      }
      daysSelected[finalDate] = {endingDay: true, color: cerulean, textColor: white};
      this.setState({daysSelected});
    }
  };

  handleSelectRange = () => {
    const {initialDate, finalDate} = this.state;
    const {onAcceptDate} = this.props;
    onAcceptDate({initialDate, finalDate});
  };

  renderArrow = direction => {
    <Image resizeMode="contain" source={direction === VARIABLES.left ? prevImg : nextImg} />;
  };

  render() {
    const {daysSelected} = this.state;
    return (
      <Calendar
        onDayPress={this.handleClickModalFilter}
        markedDates={daysSelected}
        markingType={PERIOD}
        theme={myTheme}
        renderArrow={this.renderArrow}
      />
    );
  }
}

CustomCalendar.propTypes = {
  onAcceptDate: PropTypes.func.isRequired,
};

export default CustomCalendar;
