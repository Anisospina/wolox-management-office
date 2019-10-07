import React, {useCallback, memo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionCreators as authActions} from '@redux/auth/actions';
import CustomCalendar from '@components/CustomCalendar';

import './i18n';
import Layout from './layout';

const LoginContainer = () => {
  const loading = useSelector(state => state.auth.currentUserLoading);
  const dispatch = useDispatch();
  const handleLogin = useCallback(() => dispatch(authActions.login()), [dispatch]);

  return (
    <>
      <CustomCalendar />
      <Layout onLogin={handleLogin} loading={loading} />
    </>
  );
};

export default memo(LoginContainer);
