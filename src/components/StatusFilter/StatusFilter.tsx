'use client'

type StatusFilterProps = {
  selectedStatus: string;
  onChange: (status: string) => void;
};

const StatusFilter = ({ selectedStatus, onChange }:StatusFilterProps) => {
  return (
    <select className="p-1 text-center"
      value={selectedStatus}
      onChange={(e) => onChange(e.target.value)} 
      role="combobox"
    >
      <option value="all">All Status</option> 
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>
  );
};

export default StatusFilter;
