import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center py-6 lg:py-10">
      <nav className="bg-gray-800 text-white rounded-xl py-2 flex items-center gap-2 lg:px-4">
        <button className="flex items-center gap-1 px-2 py-1 text-sm text-white hover:text-teal-400 disabled:opacity-50" disabled>
          <span>&lt;</span>
          Previous
        </button>
        <button className="px-2 py-1 text-sm text-teal-400 border-b border-teal-400">1</button>
        <button className="px-2 py-1 text-sm hover:text-teal-400">2</button>
        <span className="px-2 py-1 text-sm">…</span>
        <button className="py-1 text-sm hover:text-teal-400">10</button>
        <div className="w-px h-4 bg-gray-600 mx-1"></div>
        <button className="flex items-center gap-1 px-2 py-1 text-sm hover:text-teal-400">
          Next
          <span>&gt;</span>
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
