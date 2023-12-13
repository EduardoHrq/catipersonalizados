import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/landingPage";
import { DefaultLayout } from "./layout/defaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}