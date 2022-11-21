import React, { FC } from "react";

interface ICurrencyInput {
  currencyName: string;
  inputValue: number;
  handleChange?: (value: string) => void;
  isDisabled?: boolean;
}

export const CurrencyInput: FC<ICurrencyInput> = ({
  currencyName,
  inputValue,
  handleChange,
  isDisabled,
}) => {
  return (
    <div className="flex justify-center items-center gap-5 flex-col">
      <h3>Selected valute</h3>
      <h4>{currencyName}</h4>
      <input
        disabled={isDisabled}
        className="border-black border border-1  border-t-0 border-r-0 border-l-0  outline-0 bg-transparent"
        value={inputValue}
      />
    </div>
  );
};
