import { ReduxActions } from "../ReduxActions";
import { AppReducerStates } from "./AppReducerStates";
import { AppReducerTypes } from "./AppReducerTypes";

const initialState: AppReducerStates = {
  openModal: false,
  zIndex: "10",
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
    case AppReducerTypes.SET_ZINDEX:
      return {
        ...states,
        zIndex: action.payload,
      };
    default:
      return states;
  }
};
