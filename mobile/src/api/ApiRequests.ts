const axios = require('axios');

import { DeleteHeaders } from '../types/types';

export default class ApiRequests {
  postRequest = async (url: string, body: Object, options: Object) => {
    try {
      const res = await axios.post(url, body, options);
      console.log(res);
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  getRequest = async (url: string, body: Object, options: Object) => {
    try {
      const res = await axios.get(url, options, body);
      return res;
    } catch (e) {
      return e;
    }
  };

  putRequest = async (url: string, body: Object, options: Object) => {
    try {
      const res = await axios.put(url, body, options);
      return res;
    } catch (e) {
      return e;
    }
  };

  deleteRequest = async (url: string, body: Object, options: DeleteHeaders) => {
    try {
      const res = await axios.delete(url, {
        data: body,
        headers: options.headers,
      });
      return res;
    } catch (e) {
      return e;
    }
  };
}
