import Admin from "./page/Admin";
import Basket from "./page/Basket";
import Shop from "./page/Shop";
import Login from "./page/Auth";
import Device from "./page/DevicePage";

import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE } from "./utils/const";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];
export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTER_ROUTE,
    Component: Login,
  },
  {
    path: `${DEVICE_ROUTE}/:id`,
    Component: Device,
  },
];
