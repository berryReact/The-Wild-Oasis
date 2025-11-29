"use client";

function Filter() {
  return (
    <div className="flex border border-primary-800">
      <button className="px-5 py-2 hover:bg-primary-700">All Cabins</button>
      <button className="px-5 py-2 hover:bg-primary-700">1 &mdash; 3</button>
      <button className="px-5 py-2 hover:bg-primary-700">4 &mdash; 7</button>
      <button className="px-5 py-2 hover:bg-primary-700">8 or more</button>
    </div>
  );
}

export default Filter;
