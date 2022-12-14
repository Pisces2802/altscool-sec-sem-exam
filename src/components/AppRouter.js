import Home from "./Home.js";
import Repos from "./Repos.js";
import Repo from "./Repo";
import ErrorPage from "./ErrorPage.js";
import About from "./About.js";
import { Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About name="David" />} />
      <Route path="repos" element={<Repos />}>
        <Route path=":repoId" element={<Repo />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
