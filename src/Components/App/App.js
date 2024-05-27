import React from "react";
import { Route, Routes } from "react-router-dom";
import Site from "../Site/Site";
import Main from "../Main/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Site />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
};

export default App;
