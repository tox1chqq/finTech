import React, { useEffect } from "react";
import { converterStore } from "../story/converterStore";
import favorite from "../assests/favorite.png";
import select from "../assests/select.png";
import remove from "../assests/delete.png";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { ICurrency } from "../types";

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
      <div className="w-full flex flex-col items-center">
        <h3 className="font-semibold text-2xl p-5">Current currency</h3>
        <h3 className="text-xl pm-5">{currentCurrency}</h3>
        <h3 className="font-semibold text-2xl p-5">Favorites</h3>
        <ul className="flex flex-wrap gap-5 pl-6 min-h-[50px]">
          {favoriteList.map((item) => (
            <li
              key={item.name}
              className=" px-2 flex items-center justify-between border-2 min-h-[50px] min-w-[200px] rounded-md"
            >
              <div>
                <button className="h-[15px] w-[15px]">
                  <img
                    src={remove}
                    alt="remove"
                    onClick={() => deleteFromList(item)}
                  />
                </button>
              </div>
              {item.name}
              <div>
                <button
                  className="h-[15px] w-[15px]"
                  onClick={() => handleConvert(item)}
                >
                  <img src={select} alt="select" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex flex-col items-center">
        <h3 className="font-semibold text-2xl p-5">Currensy List</h3>
        <ul className="flex flex-wrap gap-5 pl-6">
          {currencyList.map((item, key) => (
            <li
              key={item.name + key}
              className=" px-2 flex items-center justify-between border-2 min-h-[50px] min-w-[200px] rounded-md"
            >
              <div>
                <button className="h-[15px] w-[15px]">
                  <img
                    src={favorite}
                    alt="favorite"
                    onClick={() => setFavoriteList(item)}
                  />
                </button>
              </div>
              {item.name}
              <div>
                <button
                  className="h-[15px] w-[15px]"
                  onClick={() => handleConvert(item)}
                >
                  <img src={select} alt="select" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
