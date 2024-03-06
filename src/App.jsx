import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserRoute from "./routes/UserRoute";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserRoute />} />
      </Routes>
    </>
  );
}
