import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRestaurants from "../views/admin/adminRestaurants/AdminRestaurants";
const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminRestaurants />} />
      </Routes>
    </>
  );
};

export default AdminRoutes;
