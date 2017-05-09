export function showLoginForm() {
  //console.log('Login form showed');
  return {
    type: 'NO_ACTION',
    payload: 'SHOW_FORM'
  }
}
export function showError() {
  return {
    type: 'PASSWORD_DECLINED',
    payload: 'SHOW_ERROR'
  }
}
export function showSite() {
  //console.log('site showed');
  return {
    type: 'PASSWORD_ACCEPTED',
    payload: 'SHOW_SITE'
  }
}
