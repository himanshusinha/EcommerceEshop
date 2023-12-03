// auth_services.js
import Axios from 'axios';
import {METHODS, SERVICE_ROUTES} from '../constants';

//loginService
export const loginService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.LOGIN,
      method: METHODS.POST,
      data,
    };
    Axios.request(config)
      .then(res => {
        console.log(res, '............response login service');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//signUpService
export const signUpService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.SIGN_UP,
      method: METHODS.POST,
      headers: {'Content-Type': 'multipart/form-data'},
      data,
    };

    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from signup services');

        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
//getProfileService
export const getProfileService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_PROFILE,
      method: METHODS.GET,
    };
    console.log(config, '.......config');

    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from service');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
//forgotPasswordService
export const forgetPasswordService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.FORGOT_PASSWORD,
      method: METHODS.POST,
      data,
    };

    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
//getCategoriesService
export const getCategoriesService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_CATEGORIES,
      method: METHODS.GET,
    };
    console.log(config, '.......config');

    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from categories');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
//getProductService
export const getProductService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_PRODUCTS,
      method: METHODS.GET,
    };
    console.log(config, '.......config');

    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from get all products');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
//updateProfileService
export const updateProfileService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.UPDATE_PROFILE,
      method: METHODS.PUT,
      // headers: {'Content-Type': 'multipart/form-data'},
      data,
    };

    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from update profile services');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//updateProfilePicService
export const updateProfilePicService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.UPDATE_PROFILE_PIC,
      method: METHODS.PUT,
      headers: {'Content-Type': 'multipart/form-data'},
      data,
    };

    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from update profile pic services');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
