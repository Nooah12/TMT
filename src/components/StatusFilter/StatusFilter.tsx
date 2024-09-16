'use client'

type StatusFilterProps = {
  selectedStatus: string;
  onChange: (status: string) => void;
};

const StatusFilter = ({ selectedStatus, onChange }:StatusFilterProps) => {
  return (
    <select
      value={selectedStatus}
      onChange={(e) => onChange(e.target.value)} // called when a new option is selected, and it passes the selected value (completed, pending, or an empty string for "All") to the parent component.
      role="combobox"  // ensures we satisfy the 'getByRole' selector in tests?
    >
      <option value="">All</option> 
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>
  );
};

export default StatusFilter;
