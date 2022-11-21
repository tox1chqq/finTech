import axios from "axios";

const link = "https://api.exchangerate.host/latest";

class CurrencyAPI {
  getInstance = () => {
    const instance = axios.create({
      baseURL: link,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return instance;
  };

  getCurrencyArray = async (currency: string) => {
    try {
      const response = await this.getInstance().get(`?base=${currency}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };
}

export const currencyAPI = new CurrencyAPI();
