import AssignContractor from "./AssignContractor";
import PositionsTable from "./PositionsTable";

const AddEventSub = () => {
  return (
    <div className="flex justify-between gap-2">
      <AssignContractor />
      <PositionsTable />
    </div>
  );
};

export default AddEventSub;
