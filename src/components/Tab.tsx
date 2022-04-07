import React, { useState } from "react";
import { cls } from "../libs/utils";

interface IItem {
  text: string;
  select: boolean;
  setItem: () => void;
}

interface IState {
  text: string;
  location: number;
}

const Item: React.FC<IItem> = ({ text, select, setItem }) => {
  return (
    <div
      className={cls(
        "cursor-pointer font-extrabold text-lg transition ease-in-out delay-100 w-52 h-12 flex justify-center items-center",
        select ? "" : "text-gray-400"
      )}
      onClick={setItem}
    >
      {text}
    </div>
  );
};

const translateXLocation = (location: number): string => {
  if (location === 0) {
    return "-translate-x-1";
  } else if (location === 1) {
    return "translate-x-52";
  }
  return "translate-x-[400px]";
};

const Tab = () => {
  const items = ["감자", "고구마", "카레라이스"];
  const [select, setSelect] = useState<IState>({ text: items[0], location: 0 });

  const setItem = (item: string, idx: number) =>
    setSelect({ text: item, location: idx });

  return (
    <div>
      <div className="flex relative">
        {items.map((item, idx) => (
          <Item
            key={idx}
            text={item}
            select={select.text === item}
            setItem={() => setItem(item, idx)}
          />
        ))}
        <div className="absolute w-full bg-gray-300 h-1 -bottom-3 px-4 ">
          <div
            className={cls(
              "bg-teal-500 w-1/3 h-full transition ease-in-out delay-150",
              select.location === 0
                ? translateXLocation(0)
                : select.location === 1
                ? translateXLocation(1)
                : translateXLocation(2)
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Tab;
