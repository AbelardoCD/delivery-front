import { ReactNode } from "react";

export interface AppReducerStates {
  openModal: boolean;
  showBackdrop: boolean;
  backdropComponent: ReactNode | ReactNode[];
}
