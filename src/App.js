import React from "react";
import { Routes, Route } from "react-router-dom";
import ComingSoon from "./routes/coming-soon/coming-soon.component";
import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />}/>

      {/* other routes to be added further */}
    </Routes>
  );
};

export default App;