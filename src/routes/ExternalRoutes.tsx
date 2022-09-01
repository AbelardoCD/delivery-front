import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreakfastsView from "./../views/externals/breakfastsView/BreakfastsView";

import { ExternalRoutesEnum } from "./ExternalRoutesEnum";

import IndexExternalView from "./../views/externals/indexExternalView/IndexExternalView";

const ExternalRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path={ExternalRoutesEnum.EXTERNAL}
          element={<IndexExternalView />}
        />

        <Route path={ExternalRoutesEnum.BREAK} element={<BreakfastsView />} />
      </Routes>
    </>
  );
};

export default ExternalRoutes;
