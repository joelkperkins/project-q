/**
 * @module actionTypes.ts
 * @description Action Type Constants
 */

enum ActionTypes {
  // Form Actions
  // export const NEXT_FORM_PAGE: string = 'NEXT_FORM_PAGE';

  // Login Form Actions
  UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD',
  FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST',
  FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS',
  FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE',

  // Register Form Actions
  UPDATE_REGISTER_FIELD = 'UPDATE_REGISTER_FIELD',
  FETCH_REGISTER_REQUEST = 'FETCH_REGISTER_REQUEST',
  FETCH_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS',
  FETCH_REGISTER_FAILURE = 'FETCH_REGISTER_FAILURE',

  // User Actions
  AUTH_USER = 'AUTH_USER',
  LOGOUT_USER = 'LOGOUT_USER',
  SUBMIT_ISSUES = 'SUBMIT_ISSUES',

  // Issue Ranking Actions
  CLEAR_ISSUES = 'CLEAR_ISSUES',
  TOGGLE_ISSUE = 'TOGGLE_ISSUE',
  TOGGLE_ISSUE_SUCCESS = 'TOGGLE_ISSUE_SUCCESS',

  // Survey Question Actions
  ANSWER_QUESTION = 'ANSWER_QUESTION',

  // Company Selection Actions
  FETCH_COMPANY_LIST = 'FETCH_COMPANY_LIST',
  SORT_COMPANY_LIST = 'SORT_COMPANY_LIST',
  SELECT_COMPANY = 'SELECT_COMPANY',
}

export default ActionTypes;
