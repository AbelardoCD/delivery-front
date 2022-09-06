import { ReduxActions } from "../ReduxActions";
import { AppReducerStates } from "./AppReducerStates";
import { AppReducerTypes } from "./AppReducerTypes";

const initialState: AppReducerStates = {
  openModal: false,
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
    default:
      return states;
  }
};
