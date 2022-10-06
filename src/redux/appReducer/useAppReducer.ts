import { useDispatch, useSelector } from "react-redux";
import { ReduxPackages } from "../ReduxPackages";
import { AppReducerTypes } from "./AppReducerTypes";

export const useAppReducer = () => {
  const dispatch = useDispatch();
  const redux = useSelector(({ app }: ReduxPackages) => app);
  const { openModal, showBackdrop } = redux;

  const setOpenModal = (payload: boolean) => {
    dispatch({
      type: AppReducerTypes.SET_OPEN_MODAL,
      payload,
    });
  };

  const setShowBackdrop = (payload: boolean) => {
    dispatch({
      type: AppReducerTypes.SET_SHOW_BACKDROP,
      payload,
    });
  };
  return { setOpenModal, openModal, setShowBackdrop, showBackdrop };
};
