import React from "react";
import { observer } from "mobx-react";
import { converterStore } from "../story/converterStore";
import { useNavigate } from "react-router-dom";

export const Convert = observer(() => {
  const navigate = useNavigate();
  const {
    currentCurrency,
    currentCurrencyCount,
    setCurrentCurrencyCount,
    totalAmount,
    secondaryCurrency,
    setCurrentCurrency,
  } = converterStore;

  const handleSetCurrentCount = (value: string) => {
    setCurrentCurrencyCount(value.replace(/[^0-9]/g, ""));
  };

  const handleSelectCurrency = () => {
    setCurrentCurrency(secondaryCurrency);
    navigate("/list");
  };

  return (
    <>
      <div className="flex justify-evenly items-center gap-5 pt-40">
        <div className="flex justify-center items-center gap-5 flex-col">
          <h3>Current valute</h3>
          <h4>{currentCurrency}</h4>
          <input
            className="border-black border border-1  border-t-0 border-r-0 border-l-0  outline-0"
            value={currentCurrencyCount}
            onChange={(e) => handleSetCurrentCount(e.target.value)}
          />
        </div>
        <hr className="border-indigo-500 border-t-[150px] w-[1px]" />
        <div className="flex justify-center items-center gap-5 flex-col">
          <h3>Selected valute</h3>
          <h4>{secondaryCurrency}</h4>
          <input
            disabled
            className="border-black border border-1  border-t-0 border-r-0 border-l-0  outline-0 bg-transparent"
            value={totalAmount}
          />
        </div>
      </div>
      <div className="flex justify-center p-20">
        <button
          className="bg-gray-200 p-5 rounded-md"
          onClick={() => handleSelectCurrency()}
        >
          Pick this currency
        </button>
      </div>
    </>
  );
});
