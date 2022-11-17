import axios, { AxiosError } from 'axios';

const link = 'https://api.exchangerate.host/latest';

class CurrencyAPI {
    getInstance = () => {
        const instance = axios.create({
            baseURL: link,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return instance;
    };

    registerUser = async () => {
        try {
            const response = await this.getInstance().get('?base=RUB');
            console.log(response.data);
            return response.data;
        } catch (e) {
            if (e instanceof AxiosError) {
                const { code, message } = e?.response?.data;
                console.log(code, message);
                return { code, message };
            }
        }
    };
}

export default new CurrencyAPI();