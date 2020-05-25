import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text } from 'native-base';

import { navigate } from '../../navigationRef';
import { authentication, appURL } from '../../constants/constants';
import { styles } from './styles';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const sendResetCode = async () => {
    const res = await authentication.forgotPasswordRequest(
      appURL + 'api/forgotPassword',
      {
        email,
      }
    );

    if (res.status !== 201) {
      alert(res.error.message);
    } else {
      navigate('ResetPassword', {});
    }
  };

  return (
    <View style={styles.forgot}>
      <Text style={styles.forgot__header}>Type your email</Text>
      <TextInput
        style={styles.forgot__inputEmail}
        onChangeText={(email: string) => setEmail(email.trim())}
        placeholder="user@email.com"
        value={email ? email : ''}
      />
      <View style={styles.forgot__submit}>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await sendResetCode();
            setEmail('');
          }}
        >
          <Text style={styles.button__text}>Send reset code</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.forgot__footer}>
        We will send reset code to your email
      </Text>
    </View>
  );
};

export default ForgotPassword;
