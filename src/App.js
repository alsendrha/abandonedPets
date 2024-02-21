import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import NavBar from "./components/nav/NavBar";
import MorePage from "./pages/MorePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route element={<Outlet />}>
          <Route path="/" element={<MainPage />} />
          <Route path="detail" element={<DetailPage />} />
          <Route path="more" element={<MorePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
