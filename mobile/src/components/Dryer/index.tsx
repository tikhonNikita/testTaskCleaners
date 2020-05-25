import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text, ListItem, CheckBox } from 'native-base';

import { navigate } from '../../navigationRef';
import { user, appURL } from '../../constants/constants';
import { IService, DryerProps } from '../../types/types';
import { styles } from './styles';

const Dryer = (props: DryerProps) => {
  const [services, setServices] = useState(props.services);
  const [moneyError, setMoneyError] = useState(false);
  const [error, setError] = useState(false);

  const checkService = (service: IService) => {
    const newServices = services;

    if (props.money < service.price) {
      setMoneyError(true);
    } else {
      newServices.forEach((item: IService) => {
        if (item.id === service.id && !item.checked) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });

      setMoneyError(false);
      setServices([...newServices]);
    }
  };

  const createOrder = async () => {
    const selectedService = services.find(
      (service: IService) => service.checked
    );
    const res = await user.createOrder(appURL + 'api/createOrder', {
      userId: props.userId,
      date: new Date().toISOString(),
      serviceId: selectedService.id,
      price: selectedService.price,
      dryerId: props.dryer.id,
      status: 'New',
      firstName: props.firstName,
      lastName: props.lastName,
    });
    setError(false);
    if (res.status !== 200) {
      setError(true);
    } else {
      props.withdrawMoney(selectedService.price);
      navigate('UserMainMenu', {});
    }
  };

  return (
    <View style={styles.dryer}>
      {props.dryer.images.length ? (
        <Image
          source={{ uri: appURL + props.dryer.images[0] }}
          style={{ width: 100, height: 100, margin: 10 }}
        />
      ) : (
        <Image
          source={require('../../../assets/icon.png')}
          style={{ width: 100, height: 100, margin: 10 }}
        />
      )}
      <Text style={styles.dryer__text}>{props.dryer.name}</Text>
      <Text style={styles.dryer__text}>{props.dryer.description}</Text>
      <Text style={styles.dryer__text}>{props.dryer.servicesDescription}</Text>
      <Text style={styles.services__header}>Available services</Text>
      {props.services.map((service: IService) => {
        return (
          <ListItem
            key={service.id}
            style={styles.services}
            onPress={() => {
              checkService(service);
            }}
          >
            <CheckBox
              checked={service.checked}
              onPress={() => {
                checkService(service);
              }}
            />
            <Text style={styles.service__text}>{service.name}</Text>
            <Text style={styles.service__text}>Price: {service.price}</Text>
          </ListItem>
        );
      })}
      {moneyError && <Text style={styles.error}>Not enough money.</Text>}
      {error && <Text style={styles.error}>Couldn't create order.</Text>}
      <TouchableOpacity
        disabled={!services.some((service: IService) => service.checked)}
        style={styles.button}
        onPress={async () => {
          await createOrder();
        }}
      >
        <Text style={styles.button__text}>Create order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dryer;
