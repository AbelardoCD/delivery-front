import React from "react";
import { RouteProps, RouteComponentProps } from "react-router";
export interface RouteModuleProps extends RouteProps {
  Component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
  requiredRoles: string[];
}
