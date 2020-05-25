import React from 'react';
import Dryer from '../components/Dryer/index';

export default function DryersScreen({ navigation }) {
  return (
    <Dryer
      dryer={navigation.state.params.dryer}
      services={navigation.state.params.services}
      userId={navigation.state.params.userId}
      money={navigation.state.params.money}
      firstName={navigation.state.params.firstName}
      lastName={navigation.state.params.lastName}
      withdrawMoney={navigation.state.params.withdrawMoney}
    />
  );
}
