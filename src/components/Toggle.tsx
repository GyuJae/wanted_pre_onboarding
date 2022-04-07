import React, { useState } from "react";
import { cls } from "../libs/utils";

interface IItem {
  select: boolean;
  text: string;
  setSelect: () => void;
}

const Item: React.FC<IItem> = ({ select, text, setSelect }) => {
  return (
    <div
      className={cls(
        "z-10 cursor-pointer font-extrabold transition ease-in-out delay-100 w-full h-full rounded-full flex justify-center items-center",
        select ? "" : "text-gray-400"
      )}
      onClick={setSelect}
    >
      {text}
    </div>
  );
};

const Toggle = () => {
  const [detail, setDetail] = useState<boolean>(false);

  const onStandClick = () => setDetail(false);

  const onDetailClick = () => setDetail(true);

  return (
    <div>
      <div className="relative w-96 bg-gray-200 h-14 rounded-full flex justify-around items-center">
        <Item setSelect={onStandClick} select={!detail} text={"기본"} />
        <Item setSelect={onDetailClick} select={detail} text={"상세"} />
        <div
          className={cls(
            "transition ease-in-out delay-150 absolute w-44 bg-white h-5/6 rounded-full",
            detail ? "translate-x-24" : "-translate-x-24"
          )}
        />
      </div>
    </div>
  );
};

export default Toggle;
