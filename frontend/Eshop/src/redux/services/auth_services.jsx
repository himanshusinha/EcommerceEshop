// auth_services.js
import Axios from 'axios';
import {METHODS, SERVICE_ROUTES, replaceUrl} from '../constants';
import {SEARCH_ADMIN_PRODUCTS} from '../constants/service.constant';

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
// //updateProfileService
export const updateProductPicService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.UPDATE_PROFILE_PIC,
      method: METHODS.PUT,
      headers: {'Content-Type': 'multipart/form-data'},
      data,
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
//deleteAdminProductByIdService
export const deleteAdminProductByIdService = ({id}) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.DELETE_ADMIN_PRODUCT_BY_ID, {id}),
      method: METHODS.DELETE,
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

//addAdminProductImagesByIdServices
export const addAdminProductImagesByIdServices = ({formData, id}) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.ADD_PRODUCTS_IMAGES_BY_ID, {id}),
      method: METHODS.POST,
      data: formData,
    };
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
//deleteAdminProductImagesByIdServices
// In your authAsyncThunk.js or equivalent file:

export const deleteAminCategoriesByIdServices = ({formData, id}) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.DELETE_ADMIN_CATEGORIES_BY_ID, {id}),
      method: METHODS.DELETE,
      data: formData,
    };
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
export const deleteAdminProductImageByIdThunk =
  ({id, imageId}) =>
  async dispatch => {
    try {
      const response = await fetch(
        `/api/v1/product/images/${id}?id=${imageId}`,
        {
          method: 'DELETE',
        },
      );

      const data = await response.json();

      if (response.ok) {
        dispatch({type: 'DELETE_PRODUCT_IMAGE_SUCCESS', payload: data});
        return data;
      } else {
        dispatch({type: 'DELETE_PRODUCT_IMAGE_FAILURE', payload: data});
        throw new Error(data.message || 'Failed to delete image');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
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

//searchAdminProductsService
export const searchAdminProductsService = async ({category, keyword}) => {
  try {
    const response = await axios.get(
      `${SEARCH_ADMIN_PRODUCTS}?category=${category}&keyword=${keyword}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
//getAdminOrderService
export const getAdminOrderService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_ADMIN_ORDERS,
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
//getOrderService
export const getOrderService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_ORDERS,
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
export const createAdminOrderService = async payload => {
  try {
    const response = await Axios.post('/api/v1/order/new', payload);
    return response.data; // Returning just the data for simplicity. Adjust as needed.
  } catch (error) {
    throw error; // Throwing the error for centralized error handling in the thunk.
  }
};
export const createPaymentService = totalAmount => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.CREATE_PAYMENT,
      method: METHODS.POST,
      data: {totalAmount},
    };
    console.log(config, '.......config');

    console.log(config, '.......create payment service');
    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from create payment services');
        resolve(res);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};
//processOrderByIdService
export const processOrderByIdService = id => {
  // console.log(id, 'service get id'); // Uncomment for debugging
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.PROCESS_ORDER_BY_ID, id),
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
