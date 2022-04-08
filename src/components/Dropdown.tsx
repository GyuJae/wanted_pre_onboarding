import React, { useState } from "react";

const Dropdown = () => {
  const data = [
    "All Symbols",
    "BTCUSD.PERP",
    "ETHUSD.PERP",
    "BCHUSER.PERP",
    "LTCUSD.PERP",
    "XRPUSD.PERP",
    "1000SHIBUSD.PERP",
    "BANDUSD.PERP",
  ];
  const [value, setValue] = useState<string>(data[0]);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="w-96 space-y-2">
      <div
        onClick={() => setShowSearch((prev) => !prev)}
        className="w-full h-16 bg-gray-100 text-lg font-semibold mb-5 flex justify-between items-center px-4 text-gray-500 cursor-pointer border-[2px] rounded-md"
      >
        <div>{value}</div>
        <div>▼</div>
      </div>
      {showSearch && (
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute top-5 left-2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="bg-gray-50 border-[2px] w-full h-16 rounded-t-md outline-none pr-2 pl-10 text-xl text-gray-500"
            value={searchValue}
            placeholder="Search Symbol"
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <ul className="bg-gray-50 border-[2px] border-t-0 space-y-2 rounded-b-md">
            {data
              .filter(
                (symbolName) =>
                  symbolName.toLocaleLowerCase().startsWith(searchValue) ||
                  symbolName.toLocaleUpperCase().startsWith(searchValue)
              )
              .map((symbolName, idx) => (
                <li
                  key={idx}
                  className="pl-10 text-xl py-4 hover:bg-gray-100 cursor-pointer text-gray-500 font-medium"
                  onClick={() => setValue(symbolName)}
                >
                  {symbolName}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
