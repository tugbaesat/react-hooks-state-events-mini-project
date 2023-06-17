import React from "react";

function CategoryFilter({ categories, selectedCategory, onClickFilter }) {
  const categoryButtons = categories.map((category) => {
    const selectedClass = selectedCategory === category ? "selected" : null;
    return (
      <button
        key={category}
        className={selectedClass}
        onClick={() => onClickFilter(category)}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
