import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Text, List, ListItem } from 'native-base';

import { getDryersServices } from '../../helpers/apiCalls';
import { navigate } from '../../navigationRef';
import { IOrder, OrdersProps } from '../../types/types';
import { styles } from './styles';

const Orders = (props: OrdersProps) => {
  const formatOutput = (order: IOrder) => {
    const date = new Date(order.date);
    return `
    First name: ${order.firstName}
    Last name: ${order.lastName}
    ${date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()}
    Price: ${order.price}
    Status: ${order.status}
    `;
  };

  return (
    <View style={styles.orders}>
      <SafeAreaView>
        <ScrollView>
          <List>
            {props.orders.map((order: IOrder) => {
              return (
                <ListItem
                  key={order.date.toString()}
                  onPress={async () => {
                    const services = await getDryersServices(order.dryerId);
                    navigate('EditOrder', { order: order, services: services });
                  }}
                >
                  <Text>{formatOutput(order)}</Text>
                </ListItem>
              );
            })}
          </List>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Orders;
