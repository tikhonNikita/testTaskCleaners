import React, { useEffect, useState } from 'react';
import UserPanel from '../components/UserPanel/index';
import { user, appURL } from '../constants/constants';

export default function UserMainMenuScreen({ navigation }) {
  return (
    <UserPanel
      money={Math.floor(Math.random() * 500)}
      lastName={navigation.state.params.lastName}
      firstName={navigation.state.params.firstName}
      userId={navigation.state.params.userId}
    />
  );
}
