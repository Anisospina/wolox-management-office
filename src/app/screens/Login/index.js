import React, {useCallback, memo} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {actionCreators as authActions} from '@redux/auth/actions';
import CustomCalendar from '@components/CustomCalendar';

import './i18n';
import Layout from './layout';
import styles from './styles';

const LoginContainer = () => {
  const loading = useSelector(state => state.auth.currentUserLoading);
  const dispatch = useDispatch();
  const handleLogin = useCallback(() => dispatch(authActions.login()), [dispatch]);

  return (
    <>
      <View style={styles.calendar}>
        <CustomCalendar />
      </View>
      <Layout onLogin={handleLogin} loading={loading} />
    </>
  );
};

export default memo(LoginContainer);
