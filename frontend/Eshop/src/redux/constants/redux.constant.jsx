//============Async Routes ============================
export const ASYNC_ROUTES = {
  LOGIN: 'login',
  SIGN_UP: 'signUp',
  LOGOUT: 'logOut',
  GET_PROFILE: 'getProfile',
  FORGOT_PASSWORD: 'forgotPassword',
  GET_CATEGORIES: 'getCategories',
  GET_PRODUCTS: 'getProducts',
  GET_ADMIN_PRODUCTS: 'GetAdminProducts',
  UPDATE_PROFILE: 'updateProfile',
  UPDATE_PROFILE_PIC: 'updateProfilePic',
  CHANGE_PASSWORD: 'changePassword',
  RESET_PASSWORD: 'resetPassword',
  ADD_PRODUCTS: 'addProducts',
  ADD_PRODUCTS_IMAGES_BY_ID: 'addProductsImagesById',
  ADD_ADMIN_CATEGORIES: 'addAdminCategories',
  DELETE_ADMIN_PRODUCTS_IMAGES_BY_ID: 'deleteAdminProductImageById',
  DELETE_ADMIN_CATEGORIES_BY_ID: 'deleteAdminCategoriesById',
  GET_PRODUCTS_DETAILS_BY_ID: 'getProductsById',
  UPDATE_PRODUCTS_DETAILS_BY_ID: 'updateProductsById',
  UPDATE_PRODUCT_PIC_BY_ID: 'updateProductPic',
  UPDATE_ADMIN_PRODUCT_BY_ID: 'updateAdminProductById',
  DELETE_ADMIN_PRODUCT_BY_ID: 'deleteAdminProductById',
  SEARCH_ADMIN_PRODUCTS: 'searchAdminProducts',
};
//====================Thunk Status=====================
export const THUNK_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILED: 'failed',
};
