import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Lessons } from "./pages/Lessons/Lessons";
import { Homeworks } from "./pages/Homeworks/Homeworks";

import { L29 } from "./features/L29/L29";
import { L31 } from "./features/L31/L31";
import { L34 } from "./features/L34/L34";
import { L36 } from "./features/L36/L36";
import { L37 } from "./features/L37/L37";
import { L38 } from "./features/L38/L38";

import { Hw29 } from "./features/Hw29/Hw29";
import { Hw31 } from "./features/Hw31/Hw31";
import { Hw32 } from "./features/Hw32/Hw32";
import { Hw34 } from "./features/Hw34/Hw34";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="lessons" element={<Lessons />}>
            <Route index element={<p style={{ padding: "16px" }}> Choose one of the lessons</p>} />
            <Route path="l29" element={<L29 />} />
            <Route path="l31" element={<L31 />} />
            <Route path="l34" element={<L34 />} />
            <Route path="l36" element={<L36 />} />
            <Route path="l37/*" element={<L37 />} />
            <Route path="l38" element={<L38 />} />
          </Route>

          <Route path="homeworks" element={<Homeworks />}>
            <Route index element={<p style={{ padding: "16px" }}> Choose one of the homeworks</p>} />
            <Route path="hw29" element={<Hw29 />} />
            <Route path="hw31" element={<Hw31 />} />
            <Route path="hw32" element={<Hw32 />} />
            <Route path="hw34" element={<Hw34 />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
