import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { PublicRoutesEnum } from "./routes/PublicRoutesEnum";
import Login from "./views/public/login/Login";

import LandingPage from "./views/public/landingPage/LandingPage";
import Menu from "./views/public/menu/Menu";
import PublicDashboard from "./views/public/publicDashboard/PublicDashboard";
import AdminDashboard from "./views/admin/adminDashboard/AdminDashboard";
import RoutesDashboard from "./routes/RotesDashboard";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={() => <RoutesDashboard />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
