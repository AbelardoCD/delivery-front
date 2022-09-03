import { useEffect, useState } from "react";
import { MenuInterface } from "../models/menuInterface";
import AdminService from "../services/AdminService";

export const useMenu = () => {
  const [menuList, setMenuList] = useState<MenuInterface[]>([]);

  useEffect(() => {
    AdminService.getMenu(setMenuList);
  }, []);
  return { menuList };
};
