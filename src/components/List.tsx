import React, { FC } from "react";
import { ICurrency } from "../types";

interface IList {
  data: ICurrency[];
  leftIcon: string;
  rightIcon: string;
  leftAction: (value: ICurrency) => void;
  rightAction: (value: ICurrency) => void;
}

export const List: FC<IList> = ({
  data,
  leftIcon,
  rightIcon,
  leftAction,
  rightAction,
}) => {
  return (
    <ul className="flex flex-wrap gap-5 pl-6 min-h-[50px]">
      {data.map((item) => (
        <li
          key={item.name}
          className=" px-2 flex items-center justify-between border-2 min-h-[50px] min-w-[200px] rounded-md"
        >
          <div>
            <button className="h-[15px] w-[15px]">
              <img
                src={leftIcon}
                alt="remove"
                onClick={() => leftAction(item)}
              />
            </button>
          </div>
          {item.name}
          <div>
            <button
              className="h-[15px] w-[15px]"
              onClick={() => rightAction(item)}
            >
              <img src={rightIcon} alt="select" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
