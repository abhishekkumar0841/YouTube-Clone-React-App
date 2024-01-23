import React from "react";
import { categories } from "../../utils/constants";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-2/12 pb-12 h-[90vh] overflow-x-scroll gap-8 fixed">
      {categories.map((category) => (
        <button
          key={category.name}
          className=" flex items-center gap-8 text-2xl font-semibold"
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
