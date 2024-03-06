import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";

const UserRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/new-requests" />} />
      <Route path="new-requests" element={<Layout />} />
      <Route path="add-event" element={<Layout />} />
      <Route path="*" element={<Navigate to="/new-requests" />} />
    </Routes>
  );
};

export default UserRoute;
