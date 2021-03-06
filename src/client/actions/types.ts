import { Action } from "redux";

export interface formFieldObject {
  form: string,
  field: string,
  type: string,
  value: string,
};

// Form - Update Form Field Action
export interface updateFieldAction extends Action {
  type: string,
  payload: formFieldObject,
};

// User - Logout Action
export interface logoutUserAction extends Action {
  type: string,
};
