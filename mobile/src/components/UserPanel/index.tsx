import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  Image,
} from 'react-native';
import { Text, List, ListItem } from 'native-base';

import { navigate } from '../../navigationRef';
import { getDryers, getDryersServices } from '../../helpers/apiCalls';
import { user, appURL } from '../../constants/constants';
import { IDryer, UserPanelProps } from '../../types/types';
import { styles } from './styles';

const UserPanel = (props: UserPanelProps) => {
  const [money, setMoney] = useState(props.money);
  const [dryers, setDryers] = useState([]);

  const withdrawMoney = (price: number) => {
    setMoney(money - price);
  };

  const returnMoney = (price: number) => {
    setMoney(money + price);
  };

  useEffect(() => {
    if (dryers.length === 0) fetchDryers();
  });

  const fetchDryers = async () => {
    const newDryers = await getDryers();
    setDryers([...newDryers]);
  };

  const getOrders = async () => {
    const res = await user.getOrders(appURL + 'api/myOrders/' + props.userId);
    if (res.status !== 200) {
      return [];
    } else {
      return res.data;
    }
  };

  return (
    <View style={styles.userPanel}>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          await AsyncStorage.clear();
          navigate('Login', {});
        }}
      >
        <Text style={styles.button__text}>Logout</Text>
      </TouchableOpacity>
      <Text style={styles.userPanel__money}>Your money: {money}</Text>
      <Text style={styles.userPanel__dryersText}>Available dryers:</Text>
      <SafeAreaView style={{ height: 350 }}>
        <ScrollView style={styles.userPanel__scrollview}>
          <List>
            {dryers.map((dryer: IDryer) => {
              return (
                <ListItem
                  key={dryer.id}
                  onPress={async () => {
                    const services = await getDryersServices(dryer.id);
                    navigate('Dryer', {
                      dryer: dryer,
                      services: services,
                      userId: props.userId,
                      money: money,
                      firstName: props.firstName,
                      lastName: props.lastName,
                      withdrawMoney: withdrawMoney,
                    });
                  }}
                >
                  {dryer.images.length ? (
                    <Image
                      source={{ uri: appURL + dryer.images[0] }}
                      style={{ width: 100, height: 100, margin: 10 }}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/icon.png')}
                      style={{ width: 100, height: 100, margin: 10 }}
                    />
                  )}
                  <Text style={styles.userPanel__text}>{dryer.name}</Text>
                </ListItem>
              );
            })}
          </List>
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          const orders = await getOrders();
          navigate('MyOrders', { orders, returnMoney });
        }}
      >
        <Text style={styles.button__text}>Show my orders</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserPanel;
