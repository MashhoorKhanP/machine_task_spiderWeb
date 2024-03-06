import { meetingData } from "../constants/constant";

const AssignContractor = () => {
  return (
    <>
      <div className="flex">
        <div>
          <h1 className="font-medium p-2">Assign Contractor</h1>
          {meetingData.map((meeting, index) => (
            <div
              key={index}
              className="bg-black p-3 flex flex-col gap-3 border border-[#D175B6] w-60 rounded-lg"
            >
              <div className="p-2 hover:bg-[#D175B6] rounded-md border border-[#D175B6]">
                <div className="flex gap-1">
                  <p className="text-lg font-medium">{meeting.meetingRoom}</p>
                  <div className="mt-1 ml-2 flex gap-1">
                    {" "}
                    <i className="bi bi-star-fill text-custom-600"></i>
                    <p className="hover:text-black font-semibold text-[#D175B6]">
                      {meeting.positions} Positions
                    </p>
                  </div>
                </div>
                <p className="text-xs">
                  Start from {meeting.startDate} - End at {meeting.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AssignContractor;
