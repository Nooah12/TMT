'use client'

type CategoryFilterProps = {
  categories: string[]; // Array of categories to display in the dropdown (from page.tsx)
  selectedCategory: string;
  onChange: (category: string) => void;
};

const CategoryFilter = ({ categories, selectedCategory, onChange }: CategoryFilterProps) => {
  return (
    <select className="mb-1 p-1 rounded text-center"
      value={selectedCategory}
      onChange={(e) => onChange(e.target.value)}
      role="combobox"
    >
      <option value="">All Categories</option> 
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
