import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Lessons } from "./pages/Lessons/Lessons";
import { Homeworks } from "./pages/Homeworks/Homeworks";

import { L29 } from "./components/Lessons/L29/L29";
import { L31 } from "./components/Lessons/L31/L31";

import { Hw29 } from "./components/Homeworks/Hw29/Hw29";
import { Hw31 } from "./components/Homeworks/Hw31/Hw31";
import { Hw32 } from "./components/Homeworks/Hw32/Hw32";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="lessons" element={<Lessons />}>
            <Route index element={<p style={{ padding: "16px" }}> Choose one of the lessons</p>} />
            <Route path="l29" element={<L29 />} />
            <Route path="l31" element={<L31 />}/>
          </Route>

          <Route path="homeworks" element={<Homeworks />}>
            <Route index element={<p style={{ padding: "16px" }}> Choose one of the homeworks</p>} />
            <Route path="hw29" element={<Hw29 />} />
            <Route path="hw31" element={<Hw31 />} />
            <Route path="hw32" element={<Hw32 />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
