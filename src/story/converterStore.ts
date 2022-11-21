import { makeAutoObservable } from "mobx";
import { currencyAPI } from "../services";
import { ICurrency } from "../types";

class ConverterStore {
  constructor() {
    makeAutoObservable(this);
  }

  currentCurrency: string = "RUB";
  currentCurrencyCount: number = 0;
  currencyRatio: number = 0;

  secondaryCurrency: string = "";

  favoriteList: ICurrency[] = [];

  currencyList: ICurrency[] = [];

  get totalAmount() {
    return +(this.currentCurrencyCount * this.currencyRatio).toFixed(1);
  }

  setCurrentCurrency = (value: string) => {
    this.currentCurrency = value;
  };

  setCurrentCurrencyCount = (value: string) => {
    this.currentCurrencyCount = Number(value);
  };

  setCurrencyRatio = (value: number) => {
    this.currencyRatio = value;
  };

  setSecondaryCurrency = (value: string) => {
    this.secondaryCurrency = value;
  };

  setFavoriteList = (value: ICurrency) => {
    if (!this.favoriteList.includes(value)) {
      this.favoriteList = [...this.favoriteList, value];
    }
  };

  deleteFromList = (value: ICurrency) => {
    this.favoriteList = this.favoriteList.filter((item) => item !== value);
  };

  getCurrencyList = async () => {
    const data = await currencyAPI.getCurrencyArray(this.currentCurrency);

    this.currencyList = Object.entries(data.rates).map((currency) => {
      return { name: currency[0], value: Number(currency[1]) };
    });
  };
}

export const converterStore = new ConverterStore();
