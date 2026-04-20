import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <h1>Lars's fiskebutikk</h1>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
