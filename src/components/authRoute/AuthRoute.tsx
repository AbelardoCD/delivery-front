import React, { useEffect, useState } from "react";
import { Route, RouteComponentProps, useHistory } from "react-router-dom";

import { RouteModuleProps } from "../../models/RouteModuleProps";
import { AdminRoutesEnum } from "../../routes/AdminRoutesEnum";
import { AuthenticationService } from "../../services/AuthenticationService";

const AuthRoute = ({
  Component,
  path,
  exact = false,
  requiredRoles,
}: RouteModuleProps): JSX.Element => {
  //general functions
  const history = useHistory();

  //states
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  //status
  useEffect(() => {
    setIsLoaded(
      AuthenticationService.verifyPageByRole(requiredRoles, history.push)
    );
  }, [history, requiredRoles]);

  console.log(isLoaded);

  return (
    <React.Fragment>
      {isLoaded ? (
        <Route
          exact={exact}
          path={path}
          render={(props: RouteComponentProps) => <Component {...props} />}
        />
      ) : null}
    </React.Fragment>
  );
};

export default AuthRoute;
