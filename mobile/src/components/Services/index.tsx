import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, List, ListItem } from 'native-base';

import { navigate } from '../../navigationRef';
import { admin, appURL } from '../../constants/constants';
import { IService, ServicesProps } from '../../types/types';
import { styles } from './styles';

const Services = (props: ServicesProps) => {
  const [services, setServices] = useState(props.services);

  useEffect(() => {
    fetchServices();
  });

  const fetchServices = async () => {
    const newServices = await props.getServices();
    setServices([...newServices]);
  };

  const deleteService = async (id: string) => {
    const res = await admin.deleteService(appURL + 'api/deleteService', {
      id,
    });

    if (res.status === 200) {
      const newServices = services.filter((item: IService) => item.id !== id);
      setServices([...newServices]);
    }
  };

  const deleteServiceVerification = (service: IService) =>
    Alert.alert(
      'Deleting service',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await deleteService(service.id);
          },
        },
      ],
      { cancelable: false }
    );

  const formattedServiceName = (service: IService) => {
    return (
      'Service name:\n' + service.name + '\n\nService price:\n' + service.price
    );
  };

  return (
    <View>
      <SafeAreaView>
        <ScrollView style={styles.scrollview}>
          <List>
            {services.map((service: IService) => {
              return (
                <ListItem key={service.id} style={styles.service__item}>
                  <Text style={styles.service__text}>
                    {formattedServiceName(service)}
                  </Text>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        navigate('EditService', { service: service })
                      }
                      style={styles.button}
                    >
                      <Text style={styles.button__text}>Edit price</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => deleteServiceVerification(service)}
                      style={styles.button}
                    >
                      <Text style={styles.button__text}>Delete service</Text>
                    </TouchableOpacity>
                  </View>
                </ListItem>
              );
            })}
          </List>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Services;
