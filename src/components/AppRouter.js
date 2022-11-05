import Home from "./Home.js";
import About from "./About.js";
import Repos from "./Repos.js";
import Repo from "./Repo";
import ErrorPage from "./ErrorPage.js";
import { Routes, Route } from "react-router-dom";



export default function AppRouter() {
    return (
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="about" element={<About name="David" />} />
  <Route path="repos" element={<Repos />}>
    <Route path=":repoId" element={<Repo />} />
  </Route>
  <Route path="*" element={<ErrorPage />} />
</Routes>

    )
}

