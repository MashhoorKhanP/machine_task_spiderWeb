import { useNavigate } from "react-router-dom";
import AddEventSub from "./AddEventSub";

const AddEvent = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className=" mx-auto max-w-screen-lg px-1 lg:px-9 relative overflow-x-auto rounded-lg ml-10 filter bg-black bg-opacity-20 text-white border border-spacing-3 border-[#D175B6] p-5">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl text-white font-bold">
            Event Name <span className="font-normal">(Venue Details)</span>
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="inline-flex rounded-md shadow-sm">
            <a
              href="#"
              aria-current="page"
              className="px-4 py-2 text-sm font-medium text-[#D175B6] border border-[#D175B6] rounded-s-lg hover:bg-[#D175B6] focus:z-10 focus:ring-2 focus:text-white hover:text-white"
            >
              EventDetails
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium  border-t text-[#D175B6] border-b border-r border-[#D175B6] hover:bg-[#D175B6] focus:z-10 focus:ring-2 focus:text-white hover:text-white"
            >
              Assign Coordinator/Coordinator
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium  border-t text-[#D175B6] border-b border-[#D175B6] hover:bg-[#D175B6] focus:z-10 focus:ring-2 focus:text-white hover:text-white"
            >
              Session Management
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium  border text-[#D175B6] border-[#D175B6] rounded-e-lg hover:bg-[#D175B6] focus:z-10 focus:ring-2 focus:text-white hover:text-white"
            >
              Generate SOW
            </a>
          </div>
          <div className="flex w-full gap-4">
            <div className="w-1/2">
              <h1 className="mb-2 mt-1 font-medium">Assign Coordinator</h1>

              <form className=" text-[#D175B6]">
                <select
                  id="countries"
                  className="bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-custom-600 focus:border-custom-600 block w-full p-2"
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
              <p className="text-[#D175B6] text-sm font-semibold p-1">
                Add New Coordinator
              </p>
            </div>
            <div className="w-1/2">
              <h1 className="mb-2 font-semibold">
                Event Name <span className="font-normal">(Venue Here)</span>
              </h1>
              <div className="flex flex-col gap-2">
                <div className="border-[#D175B6] border rounded-md flex p-1.5 w-full">
                  <p className="w-1/2 font-normal">
                    Start:<span className="font-semibold p-1">12-12-2023</span>
                  </p>
                  <p className="w-1/2 font-normal">
                    End:<span className="font-semibold p-1">15-12-2023</span>
                  </p>
                </div>
                <div className="border-[#D175B6] border rounded-md p-1">
                  <p>
                    Venue Address:
                    <span className=" font-semibold p-1">
                      Some location 12, Name Here,City,State
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <AddEventSub />
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/new-requests")}
              className="text-white bg-custom-600 hover:bg-custom-500 p-2 w-1/4 rounded-md"
            >
              Save Edits
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddEvent;
