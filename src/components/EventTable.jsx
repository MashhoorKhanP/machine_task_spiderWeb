import { Link } from "react-router-dom";
import { tableData } from "../constants/constant";

const EventTable = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-lg px-1 lg:px-9">
          <div className=" bg-black bg-opacity-20 border-2 border-custom-600 rounded-lg relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between p-4">
              <h1 className="text-2xl text-white font-bold">Event Requests</h1>
              <div className="flex items-center space-x-4">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-transparent border-2 border-white text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 pl-10 p-2 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                      required=""
                    />
                  </div>
                </form>
                <Link to="/add-event">
                  <button
                    type="button"
                    className="flex items-center justify-center text-white border-2 border-white bg-custom-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  >
                    <i className="bi bi-plus-lg font-medium text-xl"></i>
                  </button>
                </Link>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full whitespace-nowrap text-sm text-white border border-custom-600">
                <thead className="text-sm text-gray-700 bg-custom-600 capitalize dark:text-white">
                  <tr>
                    <th
                      scope="col"
                      className="sticky left-0 px-8 py-3 pr-28 z-10"
                    >
                      Event Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 pl-10 pr-10 text-center"
                    >
                      Event Start
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 pl-10 pr-10 text-center"
                    >
                      Event End
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 pl-10 pr-10 text-center"
                    >
                      Client Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 pl-10 pr-10 text-center"
                    >
                      Contact Info
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 pl-10 pr-10 text-center"
                    >
                      <span className="">Venue</span>
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="">City</span>
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="">State</span>
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="">Zip Code</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data, index) => (
                    <tr key={index} className="border border-custom-600">
                      <td className="sticky left-0 px-5 py-1 font-medium text-gray-900 bg-black bg-opacity-20 dark:text-white pr-28">
                        <i className="bi bi-eye text-lg ml-2"></i>{" "}
                        <span className="pl-2">{data.eventName}</span>
                      </td>
                      <td className="px-4 py-1 text-center">
                        {data.eventStart}
                      </td>
                      <td className="px-4 py-1 text-center">{data.eventEnd}</td>
                      <td className="px-4 py-1 text-center">
                        {data.clientName}
                      </td>
                      <td className="px-4 py-1 text-center">{data.contact}</td>
                      <td className="px-4 py-1 text-center">{data.venue}</td>
                      <td className="px-4 py-1 text-center">{data.city}</td>
                      <td className="px-4 py-1 text-center">{data.state}</td>
                      <td className="px-4 py-1 text-center">{data.zip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <nav
              className="flex flex-col md:flex-row justify-center bg-black items-start md:items-center space-y-3 md:space-y-0 p-2.5"
              aria-label="Table navigation"
            >
              <div className="flex items-stretch -space-x-px">
                <div>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-white dark:hover:text-custom-600"
                  >
                    <span className="sr-only">Previous</span>
                    <i className="bi bi-arrow-left"></i>
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-white dark:hover:text-custom-600"
                  >
                    1
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-white dark:hover:text-custom-600"
                  >
                    2
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-custom-600 dark:hover:text-custom-600"
                  >
                    3
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-white dark:hover:text-custom-600"
                  >
                    <span className="sr-only">Next</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventTable;
