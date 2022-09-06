import { useDispatch, useSelector } from "react-redux";
import { ReduxPackages } from "../ReduxPackages";
import { AppReducerTypes } from "./AppReducerTypes";

export const useAppReducer = () => {
  const dispatch = useDispatch();
  const redux = useSelector(({ app }: ReduxPackages) => app);
  const { openModal } = redux;

  console.log(redux);

  const setOpenModal = (payload: boolean) => {
    dispatch({
      type: AppReducerTypes.SET_OPEN_MODAL,
      payload,
    });
  };

  return { setOpenModal, openModal };
};
