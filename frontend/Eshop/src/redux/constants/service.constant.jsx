//================== SERVICE ROUTES=======================
export const SERVICE_ROUTES = {
  LOGIN: '/api/v1/user/login',
  SIGN_UP: '/api/v1/user/signup',
  LOGOUT: '/api/v1/user/logout',
  GET_PROFILE: '/api/v1/user/profile',
  FORGOT_PASSWORD: '/api/v1/user/forgetpassword',
  GET_CATEGORIES: '/api/v1/product/categories',
  GET_PRODUCTS: '/api/v1/product/all',
  UPDATE_PROFILE: '/api/v1/user/updateprofile',
  UPDATE_PROFILE_PIC: '/api/v1/user/updatepic',
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
