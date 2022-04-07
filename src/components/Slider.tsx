import React, { useState } from "react";
import { cls } from "../libs/utils";

interface IInputValue {
  value: string;
  onClickValue: () => void;
}

const InputValue: React.FC<IInputValue> = ({ value, onClickValue }) => {
  return (
    <div
      onClick={onClickValue}
      className="w-12 rounded-3xl cursor-pointer py-1 flex justify-center items-center bg-gray-200 text-xs text-gray-500 hover:text-white hover:bg-teal-600"
    >
      {value}
    </div>
  );
};

const RoundValue: React.FC<{ value: number; standard: number }> = ({
  value,
  standard,
}) => {
  return (
    <div
      className={cls(
        value > standard ? "bg-teal-600" : "bg-gray-200",
        "w-4 h-4 rounded-full"
      )}
    />
  );
};

const Slider = () => {
  const [value, setValue] = useState<string>("0");

  return (
    <div className="py-10 flex flex-col justify-center items-center">
      <div className="w-96 py-3 px-2 flex justify-end items-center bg-gray-100 border-[1.5px] border-gray-200 rounded-md mb-5">
        <div className="text-lg font-semibold">{value}</div>
        <div className="text-gray-400 text-sm ml-7">%</div>
      </div>
      <div className="relative">
        <input
          type="range"
          min="0"
          max="100"
          list="number"
          step={1}
          className={cls(
            "w-96 accent-teal-600 bg-transparent focus:shadow-none appearance-none h-1 rounded-full z-50",
            value === "0" ? "accent-gray-200" : ""
          )}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <div className="absolute w-96 bg-transparent h-2 z-10 top-1/2 rounded-full pointer-events-none">
          <div
            className="bg-teal-600 h-2 rounded-full overflow-hidden"
            style={{ width: `${value}%` }}
          ></div>
        </div>

        <div className="bg-gray-200 h-2 absolute top-1/2 rounded-full -z-10 w-full flex justify-between items-center">
          <RoundValue value={+value} standard={0} />
          <RoundValue value={+value} standard={25} />
          <RoundValue value={+value} standard={50} />
          <RoundValue value={+value} standard={75} />
          <RoundValue value={+value} standard={100} />
        </div>
      </div>
      <div className="mt-5 flex justify-between items-center w-96">
        <InputValue value="0%" onClickValue={() => setValue("0")} />
        <InputValue value="25%" onClickValue={() => setValue("25")} />
        <InputValue value="50%" onClickValue={() => setValue("50")} />
        <InputValue value="75%" onClickValue={() => setValue("75")} />
        <InputValue value="100%" onClickValue={() => setValue("100")} />
      </div>
    </div>
  );
};

export default Slider;
