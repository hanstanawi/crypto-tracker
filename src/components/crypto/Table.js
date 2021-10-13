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
          ...data,
          index: index + 1,
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
    if (checkCryptoExist(identifier)) {
      return;
    }
    const res = await cryptoAPI.fetchCryptoById();
  };

  return (
    <div className='flex flex-col my-10'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <AddCryptoInput />
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
                  {/* <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th> */}
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
