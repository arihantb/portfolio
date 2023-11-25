import { Route, Routes } from "react-router-dom";
import { HomePage } from "../components/homepage/HomePage";
import { Algorithms } from "../components/algorithms/Algorithms";
import { Problem } from "../components/problem/Problem";
import { Patterns } from "../components/patterns/Patterns";
import { TipsNTricks } from "../components/tipsntricks/TipsNTricks";

export const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/problem/:category/:id" element={<Problem />} />
    <Route path="/patterns" element={<Patterns />} />
    <Route path="/patterns/:category" element={<Algorithms />} />
    <Route path="/tipsntricks" element={<TipsNTricks />} />
  </Routes>
);
