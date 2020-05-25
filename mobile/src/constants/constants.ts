import ApiRequests from '../api/ApiRequests';
import AuthenticationApi from '../api/AuthenticationApi';
import AdminApi from '../api/AdminApi';
import UserApi from '../api/UserApi';

export const apiReqs = new ApiRequests();
export const authentication = new AuthenticationApi(apiReqs);
export const admin = new AdminApi(apiReqs);
export const user = new UserApi(apiReqs);
export const appURL = 'https://dry-cleaning-test.herokuapp.com/';
