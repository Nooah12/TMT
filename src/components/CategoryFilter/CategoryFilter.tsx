/* 'use client'

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
      <option value="completed">Personal</option>
      <option value="pending">Work</option>
    </select>
  );
};

export default CategoryFilter; */





// best way to do it with dynamically options??
'use client'

type CategoryFilterProps = {
  categories: string[]; // Array of categories to display in the dropdown (from page.tsx)
  selectedCategory: string;
  onChange: (category: string) => void;
};

const CategoryFilter = ({ categories, selectedCategory, onChange }: CategoryFilterProps) => {
  //categories = ['Personal', 'Work'];
  return (
    <select className="mb-1"
      value={selectedCategory}
      onChange={(e) => onChange(e.target.value)} // Pass the selected category to the parent component
      role="combobox"  // Ensures we satisfy the 'getByRole' selector in tests
    >
      <option value="">All Categories</option> 
      {/* Dynamically render options based on the categories prop ?? something wrong?? '*/}
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
