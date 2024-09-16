'use client'

type CategoryFilterProps = {
  selectedCategory: string;
  onChange: (status: string) => void;
};

const CategoryFilter = ({ selectedCategory, onChange }:CategoryFilterProps) => {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => onChange(e.target.value)} // called when a new option is selected, and it passes the selected value (completed, pending, or an empty string for "All") to the parent component.
      role="combobox"  // ensures we satisfy the 'getByRole' selector in tests?
    >
      <option value="">All Categories</option> 
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>
  );
};

export default CategoryFilter;