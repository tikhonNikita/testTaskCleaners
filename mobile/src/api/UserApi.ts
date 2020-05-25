import { AsyncStorage } from 'react-native';
import { NetworkClientType } from '../types/types';

export default class UserApi {
  networkClient: NetworkClientType;

  constructor(netClient: NetworkClientType) {
    this.networkClient = netClient;
  }

  getHeaders = async () => {
    const token = await AsyncStorage.getItem('token');

    return {
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
    };
  };

  getDryers = async (url: string) => {
    const headers = await this.getHeaders();
    const result = await this.networkClient.getRequest(url, {}, headers);

    return result;
  };

  getOrders = async (url: string) => {
    const headers = await this.getHeaders();
    const result = await this.networkClient.getRequest(url, {}, headers);

    return result;
  };

  getDryersServices = async (url: string) => {
    const headers = await this.getHeaders();
    const result = await this.networkClient.getRequest(url, {}, headers);

    return result;
  };

  createOrder = async (url: string, body: Object) => {
    const headers = await this.getHeaders();
    const result = await this.networkClient.postRequest(url, body, headers);

    return result;
  };

  getServices = async (url: string) => {
    const headers = await this.getHeaders();
    const result = await this.networkClient.getRequest(url, {}, headers);

    return result;
  };

  deleteOrder = async (url: string, body: Object) => {
    const headers = await this.getHeaders();
    const result = await this.networkClient.deleteRequest(url, body, headers);

    return result;
  };
}
