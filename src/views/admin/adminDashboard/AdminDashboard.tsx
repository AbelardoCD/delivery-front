import { useEffect } from "react";
import AdminRoutes from "../../../routes/AdminRoutes";
import AdminRequests from "../../../services/requests/AdminRequests";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AdminRoutesEnum } from "../../../routes/AdminRoutesEnum";
import AdminRestaurants from "../adminRestaurants/AdminRestaurants";
import AuthRoute from "../../../components/authRoute/AuthRoute";
import { UserRoles } from "../../../models/JWTModel";
import AdminFood from "../AdminFood";

const AdminDashboard = () => {
  return (
    <>
      <Switch>
        <AuthRoute
          exact
          Component={AdminFood}
          requiredRoles={[String(UserRoles.ADMIN)]}
          path={AdminRoutesEnum.FOOD}
        />
        <AuthRoute
          exact
          Component={AdminRestaurants}
          requiredRoles={[String(UserRoles.ADMIN)]}
          path={AdminRoutesEnum.ADMIN}
        />
      </Switch>
    </>
  );
};
export default AdminDashboard;
