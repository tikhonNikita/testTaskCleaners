import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'native-base';

import { navigate } from '../../navigationRef';
import { admin, appURL } from '../../constants/constants';
import { AddServiceProps } from '../../types/types';
import { styles } from './styles';

const AddService = (props: AddServiceProps) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(false);

  const addService = async () => {
    const res = await admin.addService(appURL + 'api/createService', {
      dryerId: props.dryerId,
      name,
      price,
    });

    if (res.status !== 200) {
      setError(true);
    }
  };

  return (
    <View style={styles.service}>
      <Text style={styles.service__name}>New service name</Text>
      <TextInput
        style={styles.service__inputName}
        onChangeText={(name: string) => setName(name)}
        placeholder="Wash clothes"
        value={name ? name : ''}
      />
      <Text style={styles.service__price}>Price of new service</Text>
      <TextInput
        style={styles.service__inputPrice}
        keyboardType="phone-pad"
        onChangeText={(price: string) => {
          if (/^\d+$/.test(price) || price === '') {
            setPrice(parseFloat(price));
          }
        }}
        placeholder="..."
        value={price ? price.toString() : ''}
      />
      {error && <Text style={styles.error}>Couldn't add service</Text>}
      <TouchableOpacity
        onPress={async () => {
          await addService();
          setName('');
          setPrice(0);
          setError(false);
        }}
        style={styles.button}
      >
        <Text style={styles.button__text}>Add service</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigate('AdminMainMenu', {});
        }}
        style={styles.button}
      >
        <Text style={styles.button__text}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddService;
