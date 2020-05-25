import React from 'react';
import MyOrders from '../components/MyOrders/index';

export default function MyOrdersScreen({ navigation }) {
  return (
    <MyOrders
      orders={navigation.state.params.orders}
      returnMoney={navigation.state.params.returnMoney}
    />
  );
}
