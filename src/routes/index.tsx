import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RoutesEnum } from "../types/enums.ts";

import Home from "../pages/Home/index.tsx";
import Details from "../pages/Details/index.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.Home} element={<Home />} />
        <Route path={RoutesEnum.Details} element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
