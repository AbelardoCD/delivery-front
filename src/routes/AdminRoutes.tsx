import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthRoute from "../components/authRoute/AuthRoute";
import { UserRoles } from "../models/JWTModel";
import AdminRestaurants from "../views/admin/adminRestaurants/AdminRestaurants";
import { AdminRoutesEnum } from "./AdminRoutesEnum";
const AdminRoutes = () => {
  return (
    <>
      <Switch>
        {/* <AuthRoute
          exact
          Component={AdminRestaurants}
          requiredRoles={[String(UserRoles.ADMIN)]}
          path={AdminRoutesEnum.ADMIN}
        /> */}

        <Route
          exact
          path={AdminRoutesEnum.ADMIN}
          component={AdminRestaurants}
        />
      </Switch>
    </>
  );
};

export default AdminRoutes;
