import axiosInstance from './axiosInstance';

const cryptoAPI = {
  fetchCrypto() {
    return axiosInstance.get(
      '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h%2C%207d'
    );
  },
  fetchCryptoById(id) {
    return axiosInstance.get();
  },
};

export default cryptoAPI;
