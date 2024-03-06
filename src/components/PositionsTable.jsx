import { positionsData } from "../constants/constant";

const PositionsTable = () => {
  console.log(positionsData);
  return (
    <div className="flex flex-col whitespace-nowrap gap-2 mt-4 p-5">
      <h1 className="font-medium p-2">Positions</h1>
      <div className="bg-black border rounded-lg border-spacing-3 border-[#D175B6]">
        <div>
          <table className="w-full text-sm capl text-left rtl:text-right text-white ">
            <thead className="text-xs capitalize text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Position
                </th>
                <th scope="col" className="px-6 py-3">
                  Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Info
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className=" px-6 py-3" colSpan="2"></th>
              </tr>
            </thead>
            <tbody className="text-white border">
              {positionsData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border border-spacing-3 text-center border-[#D175B6] p-2"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {item.position}
                  </th>
                  <td className="px-6 py-4">{item.time}</td>
                  <td className="px-6 py-4 font-semibold">
                    {item.info} <span>{item.type}</span>
                  </td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">
                    <form className="">
                      <select
                        id="countries"
                        className="bg-black border border-[#D175B6] text-gray-300 text-sm rounded-lg focus:ring-[#D175B6] focus:border-[#D175B6] block w-60 p-2.5"
                      >
                        <option className="p-3" selected>
                          Search a cordinator
                        </option>
                        <option className="p-3" value="ashraf">
                          Muhammed Ashraf
                        </option>
                        <option className="p-3" value="vinayak">
                          Vinayak
                        </option>
                        <option className="p-3" value="emil">
                          Emil
                        </option>
                        <option className="p-3" value="george">
                          George
                        </option>
                      </select>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <nav
            className="flex flex-col md:flex-row justify-center border-b border-custom-600 rounded-md bg-black items-start md:items-center space-y-3 md:space-y-0 p-2.5"
            aria-label="Table navigation"
          >
            <a
              href="#"
              className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-white dark:hover:text-custom-600"
            >
              <span className="sr-only">Previous</span>
              <i className="bi bi-arrow-left"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-white dark:hover:text-custom-600"
            >
              <i className="bi bi-circle-fill text-xs text-custom-600"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-white dark:hover:text-custom-600"
            >
              <i className="bi bi-circle text-xs"></i>
            </a>

            <a
              href="#"
              className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-white dark:hover:text-custom-600"
            >
              <span className="sr-only">Next</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PositionsTable;
