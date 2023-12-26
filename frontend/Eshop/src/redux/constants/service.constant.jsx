//================== SERVICE ROUTES=======================
export const SERVICE_ROUTES = {
  LOGIN: '/api/v1/user/login',
  SIGN_UP: '/api/v1/user/signup',
  LOGOUT: '/api/v1/user/logout',
  GET_PROFILE: '/api/v1/user/profile',
  FORGOT_PASSWORD: '/api/v1/user/forgetpassword',
  GET_CATEGORIES: '/api/v1/product/categories',
  GET_PRODUCTS: '/api/v1/product/all',
  GET_ADMIN_PRODUCTS: '/api/v1/product/admin',
  UPDATE_PROFILE: '/api/v1/user/updateprofile',
  UPDATE_PROFILE_PIC: '/api/v1/user/updatepic',
  CHANGE_PASSWORD: '/api/v1/user/changepassword',
  RESET_PASSWORD: '/api/v1/user/forgetpassword',
  ADD_PRODUCTS: '/api/v1/product/new',
  ADD_PRODUCTS_IMAGES_BY_ID: '/api/v1/product/images/:id',
  DELETE_ADMIN_PRODUCTS_IMAGES_BY_ID: '/api/v1/product/images/:id?id=imageId',
  ADD_ADMIN_CATEGORIES: '/api/v1/product/category',
  DELETE_ADMIN_CATEGORIES_BY_ID: 'api/v1/product/category/:id',
  GET_PRODUCTS_DETAILS_BY_ID: '/api/v1/product/single/:id',
  UPDATE_PRODUCTS_DETAILS_BY_ID: 'api/v1/product/single/:id',
  UPDATE_PRODUCT_PIC_BY_ID: '/api/v1/product/images/:id',
  UPDATE_ADMIN_PRODUCT_BY_ID: '/api/v1/product/single/:id',
  DELETE_ADMIN_PRODUCT_BY_ID: '/api/v1/product/single/:id',
  SEARCH_ADMIN_PRODUCTS:
    '/api/v1/product/all?category=6568bc8a901888597bbcadef&keywood=book',
  GET_ADMIN_ORDERS: '/api/v1/order/admin',
  CREATE_ADMIN_ORDERS: '/api/v1/order/new',
  CREATE_PAYMENT: '/api/v1/order/payment',
  PROCESS_ORDER_BY_ID: '/api/v1/order/single/:id',
};
//===================   Methods ==============================
export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATCH',
};
// ================== ReplaceUrl  ======================
export const replaceUrl = (url, data) => {
  var regex = new RegExp(':(' + Object.keys(data).join('|') + ')', 'g');
  return url?.replace(regex, (m, $1) => data[$1] || m);
};
