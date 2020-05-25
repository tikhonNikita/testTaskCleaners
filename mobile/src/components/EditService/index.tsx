import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'native-base';

import { navigate } from '../../navigationRef';
import { admin, appURL } from '../../constants/constants';
import { EditServiceProps } from '../../types/types';
import { styles } from './styles';

const EditService = (props: EditServiceProps) => {
  const [price, setPrice] = useState(0);

  const editService = async (id: string) => {
    const res = await admin.editService(appURL + 'api/editService', {
      id,
      price,
    });

    if (res.status === 200) {
      navigate('Services', {});
    }
  };

  return (
    <View style={styles.service}>
      <Text style={styles.service__name}>{props.service.name}</Text>
      <Text style={styles.service__price}>
        Current price: {props.service.price}
      </Text>
      <Text style={styles.service__price}>New price of service</Text>
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
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          await editService(props.service.id);
          setPrice(0);
          navigate('Services', {});
        }}
      >
        <Text style={styles.button__text}>Edit service</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditService;
