import { useState, useEffect } from 'react';
import cryptoAPI from '../../api/cryptoAPI';
import useSortable from '../../hooks/use-sortable';
import CryptoItem from './CryptoItem';
import AddCryptoInput from './AddCryptoInput';

const Table = () => {
  const [cryptos, setCryptos] = useState([]);
  const { items: sortedCryptos, requestSort } = useSortable(cryptos);

  const fetchCryptoData = async () => {
    try {
      const res = await cryptoAPI.fetchCrypto();
      const listWithIndexes = res.data.map((data, index) => {
        return {
          index: index + 1,
          id: data.id,
          name: data.name,
          symbol: data.symbol,
          image: data.image,
          current_price: data.current_price,
          total_volume: data.total_volume,
          price_change_24h: data.price_change_24h,
          circulating_supply: data.circulating_supply,
          sparkline_in_7d: data.sparkline_in_7d,
          market_cap: data.market_cap,
          price_change_percentage_24h: data.price_change_percentage_24h,
        };
      });
      setCryptos(listWithIndexes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const checkCryptoExist = (identifier) => {
    const identifierToSearch = identifier.toLowerCase();
    const foundItem = cryptos.find(
      (crypto) =>
        crypto.name.toLowerCase() === identifierToSearch ||
        crypto.symbol.toLowerCase() === identifierToSearch
    );
    return foundItem;
  };

  const addCryptoHandler = async (identifier) => {
    const identifierToSearch = identifier.toLowerCase();
    if (checkCryptoExist(identifier)) {
      return;
    }
    const listOfCoins = await cryptoAPI.fetchCoins();
    const foundCoin = listOfCoins.data.find(
      (coin) =>
        coin.name.toLowerCase() === identifierToSearch ||
        coin.symbol.toLowerCase() === identifierToSearch
    );
    if (!foundCoin) {
      return;
    }
    const coinId = foundCoin.id;
    const resCoin = await cryptoAPI.fetchCryptoById(coinId);
    const resChart = await cryptoAPI.fetchMarketChart(coinId);

    const coinData = resCoin.data;
    const chartData = resChart.data.prices.map((data) => {
      return data[1];
    });

    const coinToAdd = {
      index: cryptos.length + 1,
      id: coinData.id,
      symbol: coinData.symbol,
      name: coinData.name,
      image: coinData.image.small,
      current_price: coinData.market_data.current_price.usd,
      total_volume: coinData.market_data.total_volume.usd,
      price_change_24h: coinData.market_data.price_change_24h,
      circulating_supply: coinData.market_data.circulating_supply,
      market_cap: coinData.market_data.market_cap.usd,
      price_change_percentage_24h:
        coinData.market_data.price_change_percentage_24h,
      sparkline_in_7d: {
        price: chartData,
      },
    };
    setCryptos((prevVal) => {
      return [...prevVal, coinToAdd];
    });
  };

  return (
    <div className='flex flex-col my-10'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <AddCryptoInput onAddCrypto={addCryptoHandler} />
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer'
                    onClick={() => requestSort('index')}
                  >
                    #
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer'
                    onClick={() => requestSort('name')}
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer'
                    onClick={() => requestSort('current_price')}
                  >
                    Price
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer'
                    onClick={() => requestSort('price_change_percentage_24h')}
                  >
                    24h %
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer'
                    onClick={() => requestSort('market_cap')}
                  >
                    Market Cap
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer'
                    onClick={() => requestSort('total_volume')}
                  >
                    Volume
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer'
                    onClick={() => requestSort('circulating_supply')}
                  >
                    Circulating Supply
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Last 7 Days
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {sortedCryptos.map((crypto) => (
                  <CryptoItem key={crypto.id} crypto={crypto} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
