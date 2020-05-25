import { NetworkClientType } from '../types/types';

export default class AuthenticationApi {
  networkClient: NetworkClientType;

  constructor(netClient: NetworkClientType) {
    this.networkClient = netClient;
  }

  getHeaders = () => {
    return {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  };

  signupRequest = async (url: string, body: Object) => {
    const result = await this.networkClient.postRequest(
      url,
      body,
      this.getHeaders()
    );

    return result;
  };

  loginRequest = async (url: string, body: Object) => {
    const result = await this.networkClient.postRequest(
      url,
      body,
      this.getHeaders()
    );

    return result;
  };

  forgotPasswordRequest = async (url: string, body: Object) => {
    const result = await this.networkClient.postRequest(
      url,
      body,
      this.getHeaders()
    );

    return result;
  };

  resetPasswordRequest = async (url: string, body: Object) => {
    const result = await this.networkClient.postRequest(
      url,
      body,
      this.getHeaders()
    );

    return result;
  };
}
