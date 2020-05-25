import { AsyncStorage } from 'react-native';
import { NetworkClientType } from '../types/types';

export default class AdminApi {
  networkClient: NetworkClientType;

  constructor(netClient: NetworkClientType) {
    this.networkClient = netClient;
  }

  getOptions = async () => {
    const token = await AsyncStorage.getItem('token');

    return {
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
    };
  };

  getDryers = async (url: string) => {
    const headers = await this.getOptions();
    const result = await this.networkClient.getRequest(url, {}, headers);

    return result;
  };

  createDryer = async (url: string, body: Object) => {
    const options = await this.getOptions();
    options.headers['Content-Type'] = 'multipart/form-data';
    const result = await this.networkClient.postRequest(url, body, options);

    return result;
  };

  deleteDryer = async (url: string, body: Object) => {
    const headers = await this.getOptions();
    const result = await this.networkClient.deleteRequest(url, body, headers);

    return result;
  };

  getServices = async (url: string) => {
    const headers = await this.getOptions();
    const result = await this.networkClient.getRequest(url, {}, headers);

    return result;
  };

  getOrders = async (url: string) => {
    const headers = await this.getOptions();
    const result = await this.networkClient.getRequest(url, {}, headers);

    return result;
  };

  editOrder = async (url: string, body: Object) => {
    const headers = await this.getOptions();
    const result = await this.networkClient.putRequest(url, body, headers);

    return result;
  };

  addService = async (url: string, body: Object) => {
    const headers = await this.getOptions();
    const result = await this.networkClient.postRequest(url, body, headers);

    return result;
  };

  editService = async (url: string, body: Object) => {
    const headers = await this.getOptions();
    const result = await this.networkClient.putRequest(url, body, headers);

    return result;
  };

  deleteService = async (url: string, body: Object) => {
    const headers = await this.getOptions();
    const result = await this.networkClient.deleteRequest(url, body, headers);

    return result;
  };

  getUsers = async (url: string) => {
    const headers = await this.getOptions();
    const result = await this.networkClient.getRequest(url, {}, headers);

    return result;
  };

  deleteClient = async (url: string, body: Object) => {
    const headers = await this.getOptions();
    const result = await this.networkClient.deleteRequest(url, body, headers);

    return result;
  };
}
