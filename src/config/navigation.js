import React from 'react';
import i18next from 'i18next';
import Routes from '@constants/routes';
import { blue, white } from '@constants/colors';

// Default nav options for all screens
const defaultNavOptions = ({ navigation }) => ({
  // Change screen title from i18n traslates files
  headerTitle: i18next.t(`app:${navigation.state.routeName}`),
  // TODO: The following options are examples. Change them to your need
  headerStyle: {
    backgroundColor: blue
  },
  headerBackTitleStyle: {
    color: white
  },
  headerTitleStyle: {
    color: white
    // TODO: If you want to change the header font, apply these options
    // Replace the font with the need
    // See: https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e
    // fontWeight: 'normal',
    // fontFamily: 'Lato-Bold'
  },
  headerTintColor: white
});

export const mainSwitchNavConfig = {
  initialRouteName: Routes.InitialLoading
};

export const authStackNavConfig = {
  defaultNavigationOptions: defaultNavOptions,
  initialRouteName: Routes.Login
};

export const appStackNavConfig = {
  defaultNavigationOptions: defaultNavOptions,
  initialRouteName: Routes.Home
};

// Default nav options for all screens
export const appScreensNavOptions = {
  // TODO: Add here the screens nav options that changes with respect to
  // the default ones defined in defaultNavOptions, for example...
  /*
  [Routes.Home]: {
    headerTitle: 'Home'
  }
  */
};

export const appTabNavConfig = {
  // TODO: The following options are examples. Change them to your need
  // See: https://reactnavigation.org/docs/tab-navigator.html#tabnavigatorconfig
  tabBarPosition: 'bottom'
};

