/**
 * @module actionTypes.ts
 * @description Action Type Constants
 */

enum ActionTypes {
  // Form Actions
  // export const NEXT_FORM_PAGE: string = 'NEXT_FORM_PAGE';
  UPDATE_FIELD = 'UPDATE_FIELD',
  FETCH_FORM_REQUEST = 'FETCH_FORM_REQUEST',
  FETCH_FORM_SUCCESS = 'FETCH_FORM_SUCCESS',
  FETCH_FORM_FAILURE = 'FETCH_FORM_FAILURE',

  // User Actions
  AUTH_USER = 'AUTH_USER',
  LOGOUT_USER = 'LOGOUT_USER',
  SUBMIT_ISSUES = 'SUBMIT_ISSUES',
  UPDATE_ISSUE = 'UPDATE_ISSUE',
  COMPLETE_SURVEY = 'COMPLETE_SURVEY',

  // Issue Ranking Actions
  CLEAR_ISSUES = 'CLEAR_ISSUES',
  TOGGLE_ISSUE = 'TOGGLE_ISSUE',
  TOGGLE_ISSUE_SUCCESS = 'TOGGLE_ISSUE_SUCCESS',

  // Survey Question Actions
  ANSWER_QUESTION = 'ANSWER_QUESTION',
}

export default ActionTypes;
