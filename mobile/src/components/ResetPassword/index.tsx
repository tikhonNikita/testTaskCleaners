import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text } from 'native-base';

import { navigate } from '../../navigationRef';
import { authentication, appURL } from '../../constants/constants';
import { styles } from './styles';

const ResetPassword = () => {
  const [restoreCode, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const resetPassword = async () => {
    const res = await authentication.resetPasswordRequest(
      appURL + 'api/resetPassword',
      {
        restoreCode,
        password,
      }
    );

    if (res.status !== 201) {
      setError(true);
    } else {
      navigate('Login', {});
    }
  };

  return (
    <View style={styles.reset}>
      <Text style={styles.reset__header}>Change your password</Text>
      <Text style={styles.reset__code}>Your reset code</Text>
      <TextInput
        style={styles.reset__inputCode}
        onChangeText={(restoreCode: string) => {
          setError(false);
          setCode(restoreCode);
        }}
        placeholder="code"
        value={restoreCode ? restoreCode : ''}
      />
      <Text style={styles.reset__password}>Your new password</Text>
      <TextInput
        style={styles.reset__inputPassword}
        onChangeText={(password: string) => {
          setError(false);
          setPassword(password);
        }}
        placeholder="..."
        value={password ? password : ''}
      />
      {error && <Text style={{ color: 'red' }}>Invalid code</Text>}
      <View style={styles.reset__submit}>
        <TouchableOpacity
          disabled={password.length === 0}
          style={styles.button}
          onPress={async () => {
            await resetPassword();
            setCode('');
            setPassword('');
          }}
        >
          <Text style={styles.button__text}>Change password</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          setCode('');
          setPassword('');
          navigate('Login', {});
        }}
      >
        <Text style={styles.button__text}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPassword;
