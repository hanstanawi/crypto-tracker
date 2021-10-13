import axiosInstance from './axiosInstance';

const cryptoAPI = {
  fetchCrypto() {
    return axiosInstance.get(
      '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h%2C%207d'
    );
  },
  fetchCoins() {
    return axiosInstance.get('/coins/list');
  },
  fetchCryptoById(id) {
    return axiosInstance.get(
      `coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`
    );
  },
  fetchMarketChart(id) {
    return axiosInstance.get(`coins/${id}/market_chart?vs_currency=usd&days=7`);
  },
};

export default cryptoAPI;
