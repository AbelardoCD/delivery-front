import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ExternalDashboard from "./views/externals/externalDashboard/ExternalDashboard";
import AdminDashboard from "./views/admin/adminDashboard/AdminDashboard";
import { AdminRoutesEnum } from "./routes/AdminRoutesEnum";
import PublicDashboard from "./views/public/publicDashboard/PublicDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AdminRoutesEnum.ADMIN} element={<AdminDashboard />} />

        <Route path="*" element={<PublicDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
