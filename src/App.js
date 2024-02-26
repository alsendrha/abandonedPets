import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import { PetsSelectProvider } from "./components/pets/PetsSelectContext";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import MorePage from "./pages/MorePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PetsSelectProvider>
        <Routes>
          <Route element={<Outlet />}>
            <Route path="/" element={<MainPage />} />
            <Route path="detail" element={<DetailPage />} />
            <Route path="more/:id" element={<MorePage />} />
          </Route>
        </Routes>
      </PetsSelectProvider>
    </div>
  );
}

export default App;
