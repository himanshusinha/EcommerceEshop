// auth_services.js
import Axios from 'axios';
import {ASYNC_ROUTES, METHODS, SERVICE_ROUTES, replaceUrl} from '../constants';
import {createAsyncThunk} from '@reduxjs/toolkit';

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
//logOutService
export const logOutService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.LOGOUT,
      method: METHODS.GET,
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
//getCategoriesService
export const getCategoriesService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_CATEGORIES,
      method: METHODS.GET,
    };

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
export const getAdminProductService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_ADMIN_PRODUCTS,
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
export const updateProductDetailsByIdService = id => {
  // console.log(id, 'service get id'); // Uncomment for debugging
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.UPDATE_ADMIN_PRODUCT_BY_ID, id),
      method: METHODS.PUT,
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
// changePasswordService
export const changePasswordService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.CHANGE_PASSWORD,
      method: METHODS.PUT,
      data,
    };
    Axios.request(config)
      .then(res => {
        console.log(res, '......response from change password service');
        resolve(res);
      })
      .catch(err => {
        console.error(err, '......error from change password service');
        reject(err);
      });
  });
};
//resetPasswordService
export const resetPasswordService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.RESET_PASSWORD,
      method: METHODS.PUT,
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

//addProductServices
export const addProductServices = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.ADD_PRODUCTS,
      method: METHODS.POST,
      headers: {'Content-Type': 'multipart/form-data'},
      data: data, // Make sure the data is passed correctly
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

//getProductDetailsByIdServices
export const getProductDetailsByIdService = id => {
  // console.log(id, 'service get id'); // Uncomment for debugging
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.GET_PRODUCTS_DETAILS_BY_ID, id),
      method: METHODS.GET,
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

//addProductServices
export const updateProductDetailsById = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.updateProductDetailsByIdService,
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

//addAdmincategoriestService
export const addAdminCategoriesService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.ADD_ADMIN_CATEGORIES,
      method: METHODS.POST,
      data,
    };

    Axios.request(config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
//deleteAdminCategoriesByIdService
export const deleteAdminCategoriesByIdService = ({id}) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.DELETE_ADMIN_CATEGORIES_BY_ID, {id}),
      method: METHODS.DELETE,
      id,
    };
    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from delete service');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//updateProfilePicService
export const updateProductPicByIdService = ({id}) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.UPDATE_PRODUCT_PIC_BY_ID, {id}),
      method: METHODS.PUT,
      headers: {'Content-Type': 'multipart/form-data'},
    };

    Axios.request(config)
      .then(res => {
        console.log(res, 'Response from update product pic service');
        resolve(res);
      })
      .catch(err => {
        console.error(err, 'Error updating product pic');
        console.log('Error response:', err.response); // Log the response details
        console.log('Request:', err.request); // Log the request details
        reject(err); // Reject with the error for further handling
      });
  });
};

//updateAdminProductByIdSerice

export const updateAdminProductByIdService = ({
  id,
  name,
  description,
  price,
  stock,
  category,
}) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.UPDATE_ADMIN_PRODUCT_BY_ID, {id}),
      method: METHODS.PUT,
      data: {name, description, price, stock, category},
    };
    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from update service');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const deleteAdminProductByIdService = ({id}) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.DELETE_ADMIN_PRODUCT_BY_ID, {id}),
      method: METHODS.DELETE,
      id,
    };
    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from delete service');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};