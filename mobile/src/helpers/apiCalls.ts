import { user, admin, appURL } from '../constants/constants';

export const getServices = async () => {
  const res = await admin.getServices(appURL + 'api/services');

  if (res.status !== 200) {
    return [];
  } else {
    return res.data;
  }
};

export const getDryers = async () => {
  const res = await admin.getDryers(appURL + 'api/getDryers');

  if (res.status !== 200) {
    return [];
  } else {
    return res.data;
  }
};

export const getDryersServices = async (dryerId) => {
  const res = await user.getDryersServices(
    appURL + 'api/getDryersService/' + dryerId
  );

  if (res.status !== 200) {
    return [];
  } else {
    return res.data;
  }
};
