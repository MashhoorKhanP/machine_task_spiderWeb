import { useLocation } from "react-router-dom";
import EventTable from "../components/EventTable";
import Sidebar from "../components/Sidebar";
import AddEvent from "../components/AddEvent";
import Navbar from "../components/Navbar";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="flex mt-8 justify-between">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5">
          {location.pathname === "/new-requests" ? (
            <EventTable />
          ) : location.pathname === "/add-event" ? (
            <AddEvent />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Layout;
