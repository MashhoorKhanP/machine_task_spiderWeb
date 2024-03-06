import { Link } from "react-router-dom";
import "./sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    if (activeOption === option) {
      setActiveOption(null);
    } else {
      setActiveOption(option);
    }
  };

  const isActiveOption = (option) => {
    return activeOption === option
      ? "border-2 w-full  border-custom-600 text-custom-600 rounded-md"
      : "";
  };

  return (
    <div className="h-screen text-white font-semibold bg-black bg-opacity-20 w-64 border-2 border-custom-600 rounded-lg">
      <div className="p-4 rounded-lg border-[#D175B6] flex flex-col">
        <ul className="tree pb-1">
          <p
            className="parent py-2"
            onClick={() => handleOptionClick("Events")}
          >
            <details>
              <summary
                className={`${isActiveOption("Events")} ${
                  location.pathname === "/new-requests" &&
                  "border-2 w-full  border-custom-600 text-custom-600 rounded-md"
                } hover:border-2 hover:border-[#D175B6] hover:text-[#D175B6] rounded-md p-3 py-2`}
              >
                Events
              </summary>
              <ul className="sidebar-ul pl-8 text-sm font-semibold cursor-pointer">
                <li
                  className={`${
                    location.pathname === "/new-requests" &&
                    "border-2 w-full  border-custom-600 text-custom-600 rounded-md"
                  } hover:border-2 hover:border-[#D175B6] hover:text-[#D175B6] rounded-md`}
                >
                  <Link to={"/new-requests"}> New Request</Link>
                </li>
                <li className=" hover:border-2 hover:border-[#D175B6] hover:text-[#D175B6] rounded-md">
                  Estimate
                </li>
                <li className=" hover:border-2 hover:border-[#D175B6] hover:text-[#D175B6] rounded-md">
                  Events
                </li>
                <li className=" hover:border-2 hover:border-[#D175B6] hover:text-[#D175B6] rounded-md">
                  Partial Request
                </li>
              </ul>
            </details>
          </p>

          <p
            className="parent cursor-pointer items-center justify-between py-2"
            onClick={() => handleOptionClick("Positions")}
          >
            {" "}
            <summary
              className={`${isActiveOption(
                "Positions"
              )} hover:border-2 hover:border-[#D175B6] hover:text-[#D175B6] rounded-md p-3 py-2`}
            >
              Positions
            </summary>
          </p>

          <p
            className="parent cursor-pointer items-center justify-between py-2"
            onClick={() => handleOptionClick("Contractors")}
          >
            <summary
              className={`${isActiveOption(
                "Contractors"
              )} hover:border-2 hover:border-[#D175B6] hover:text-[#D175B6] rounded-md p-3 py-2`}
            >
              Contractors
            </summary>
          </p>

          <p className="parent py-2" onClick={() => handleOptionClick("Users")}>
            {" "}
            <details>
              <summary
                className={`${isActiveOption(
                  "Users"
                )}  hover:border-2 hover:border-[#D175B6] hover:text-[#D175B6] rounded-md p-3 py-2`}
              >
                Users
              </summary>
              <ul className="pl-8 text-sm font-semibold cursor-pointer">
                <li className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-md">
                  Admin
                </li>
                <li className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-md">
                  Clients
                </li>
                <li className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-md">
                  Coordinators
                </li>
              </ul>
            </details>
          </p>

          <p
            className="parent cursor-pointer items-center justify-between py-2"
            onClick={() => handleOptionClick("Profile")}
          >
            {" "}
            <summary
              className={`${isActiveOption(
                "Profile"
              )} hover:border-2 hover:border-[#D175B6] hover:text-[#D175B6] rounded-md p-3 py-2`}
            >
              Profile
            </summary>
          </p>
        </ul>
      </div>
      <div className="absolute -bottom-28 p-4 w-60">
        <button className="flex items-center font-semibold justify-center text-white bg-black px-4 py-2 w-full rounded-md">
          <i className="bi bi-box-arrow-left mr-3"></i>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
