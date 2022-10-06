import { ReduxActions } from "../ReduxActions";
import { AppReducerStates } from "./AppReducerStates";
import { AppReducerTypes } from "./AppReducerTypes";

const initialState: AppReducerStates = {
  openModal: false,
  showBackdrop: false,
};

export const AppReducer = (
  states: AppReducerStates = initialState,
  action: ReduxActions
) => {
  switch (action.type) {
    case AppReducerTypes.SET_OPEN_MODAL:
      return {
        ...states,
        openModal: action.payload,
      };
    case AppReducerTypes.SET_SHOW_BACKDROP:
      return {
        ...states,
        showBackdrop: action.payload,
      };
    default:
      return states;
  }
};
