import React, { useEffect } from "react";
import { converterStore } from "../store/converterStore";
import favorite from "../assests/favorite.png";
import select from "../assests/select.png";
import remove from "../assests/delete.png";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { ICurrency } from "../types";
import { List } from "../components";

export const CurrencyList = observer(() => {
  const navigate = useNavigate();

  const {
    getCurrencyList,
    currencyList,
    setCurrencyRatio,
    setSecondaryCurrency,
    setFavoriteList,
    favoriteList,
    deleteFromList,
    currentCurrency,
  } = converterStore;

  useEffect(() => {
    getCurrencyList();
  }, [getCurrencyList]);

  const handleConvert = (item: ICurrency) => {
    setCurrencyRatio(item.value);
    setSecondaryCurrency(item.name);
    navigate(`/`);
  };

  return (
    <div className="flex justify-center items-center flex-col p-5">
      <div className="w-full flex items-center justify-around">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-semibold text-2xl p-5 pt-0">Current currency</h3>
          <h3 className="text-xl pm-5">{currentCurrency}</h3>
        </div>
        <div className="flex flex-col text-center flex-wrap max-w-[50%]">
          <h3 className="font-semibold text-2xl p-5">Favorites</h3>
          <List
            data={favoriteList}
            leftIcon={remove}
            rightIcon={select}
            leftAction={deleteFromList}
            rightAction={handleConvert}
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h3 className="font-semibold text-2xl p-5">Currensy List</h3>
        <List
          data={currencyList}
          leftIcon={favorite}
          rightIcon={select}
          leftAction={setFavoriteList}
          rightAction={handleConvert}
        />
      </div>
    </div>
  );
});
