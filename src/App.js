// import Young from "./routes/Young";
import Home from "./routes/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:id" element={<Young />} /> */}
        {/* <Route path="/2009" element={<Young2 />} />
        <Route path="/2019" element={<Young4 />} />
        <Route path="/2022" element={<Young5 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
