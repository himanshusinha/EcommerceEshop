//================== SERVICE ROUTES=======================
export const SERVICE_ROUTES = {
  LOGIN: '/api/v1/user/login',
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
