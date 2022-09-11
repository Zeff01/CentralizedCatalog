import React from "react";

const Filters = () => {
  return (
    <div className="bg-background w-full md:w-[30%] flex flex-col rounded-[5px]">
      <div className="font-bold text-md text-left p-4">Filters</div>
      <div className="w-full h-[5px] bg-white"></div>
      <div className="p-4 flex flex-col text-left tracking-wider justify-center">
        <h2>Branches</h2>
        <ul className="mb-2">
          <li>
            <input type="checkbox" />
            All
          </li>
          <li>
            <input type="checkbox" />
            Current
          </li>
          <li>
            <input type="checkbox" />
            Specific selection
          </li>
        </ul>
        <h2>Brand</h2>
        <ul className="mb-2">
          <li>
            <input type="checkbox" />
            All
          </li>
          <li>
            <input type="checkbox" />
            Specific selectiin
          </li>
        </ul>
        <h2>Search in</h2>
        <ul className="mb-2">
          <li>
            <input type="checkbox" />
            Marchant Part Number
          </li>
          <li>
            <input type="checkbox" />
            Branch Part Number
          </li>
          <li>
            <input type="checkbox" />
            Designation
          </li>
          <li>
            <input type="checkbox" />
            Attributes
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
