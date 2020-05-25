import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Text, List, ListItem } from 'native-base';

import { user, appURL } from '../../constants/constants';
import { IOrder, MyOrdersProps } from '../../types/types';
import { styles } from './styles';

const MyOrders = (props: MyOrdersProps) => {
  const [orders, setOrders] = useState(props.orders);

  const formatOutput = (order: IOrder) => {
    const date = new Date(order.date);
    let status = order.status;

    if (order.status === 'New') status = 'In process';

    return `
    First name: ${order.firstName}
    Last name: ${order.lastName}
    Price: ${order.price}
    Status: ${status}
    ${date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()}
    `;
  };

  const deleteOrder = async (orderId: string) => {
    const res = await user.deleteOrder(appURL + 'api/deleteOrder', {
      id: orderId,
    });

    if (res.status === 200) {
      const newOrders = orders.filter((order: IOrder) => order.id !== orderId);
      setOrders([...newOrders]);
    }
  };

  return (
    <View style={styles.myOrders}>
      <SafeAreaView>
        <ScrollView>
          {props.orders.length !== 0 ? (
            <List>
              {orders.map((order: IOrder) => {
                return (
                  <ListItem
                    key={order.date.toString()}
                    style={styles.myOrders__order}
                  >
                    <Text>{formatOutput(order)}</Text>
                    {order.status === 'Ready' && (
                      <TouchableOpacity
                        style={styles.button}
                        onPress={async () => {
                          await deleteOrder(order.id);
                        }}
                      >
                        <Text style={styles.button__text}>Finish</Text>
                      </TouchableOpacity>
                    )}
                    {order.status === 'Return' && (
                      <View>
                        <Text>Issue: {order.returnDescription}</Text>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={async () => {
                            await deleteOrder(order.id);
                            props.returnMoney(order.price);
                          }}
                        >
                          <Text style={styles.button__text}>Finish</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <Text style={styles.myOrders__empty}>No orders</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default MyOrders;
