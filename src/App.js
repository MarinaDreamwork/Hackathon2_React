import React from "react";

import AppRouter from "./app/components/AppRouter";
import Navbar from "./app/components/common/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
