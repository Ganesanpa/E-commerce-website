"use client";
import { Select, Button } from "antd";
import { useState } from "react";

const { Option } = Select;

const categories = ["All", "Electronics", "Accessories", "Footwear"];

export default function FilterBar({ onSortChange, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-4 rounded-xl shadow-sm mb-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            type={cat === selectedCategory ? "primary" : "default"}
            size="middle"
            className="rounded-full px-4"
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div>
        <Select
          defaultValue="default"
          style={{ width: 200 }}
          onChange={onSortChange}
          size="middle"
        >
          <Option value="default" disabled>
            Sort by
          </Option>
          <Option value="lowToHigh">Price: Low to High</Option>
          <Option value="highToLow">Price: High to Low</Option>
        </Select>
      </div>
    </div>
  );
}
