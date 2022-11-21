import React from "react";
import { observer } from "mobx-react";
import { converterStore } from "../story/converterStore";
import { useNavigate } from "react-router-dom";
import { CurrencyInput } from "../components";

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
          <CurrencyInput
            currencyName={currentCurrency}
            inputValue={currentCurrencyCount}
            handleChange={handleSetCurrentCount}
          />
        </div>
        <hr className="border-indigo-500 border-t-[150px] w-[1px]" />
        <CurrencyInput
          currencyName={secondaryCurrency}
          inputValue={totalAmount}
          isDisabled
        />
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
