import React from 'react';
import Orders from '../components/Orders/index';

export default function ClientsScreen({ navigation }) {
  return <Orders orders={navigation.state.params.orders} />;
}
