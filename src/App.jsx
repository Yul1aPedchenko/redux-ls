import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Lessons } from "./pages/Lessons/Lessons";
import { Homeworks } from "./pages/Homeworks/Homeworks";

import { L29 } from "./components/Lessons/L29/L29";

import { Hw29 } from "./components/Homeworks/Hw29/Hw29";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="lessons" element={<Lessons />}>
            <Route index element={<p style={{ padding: "16px" }}> Choose one of the lessons</p>} />
            <Route path="l29" element={<L29 />} />
          </Route>

          <Route path="homeworks" element={<Homeworks />}>
            <Route index element={<p style={{ padding: "16px" }}> Choose one of the homeworks</p>} />
            <Route path="hw29" element={<Hw29 />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
