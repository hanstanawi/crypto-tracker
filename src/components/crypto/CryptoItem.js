import React from 'react';
import { numberWithCommas } from '../../helpers/numberUtils';

const CryptoItem = ({ crypto, index }) => {
  return (
    <tr>
      <td className='px-6 py-4 whitespace-nowrap'>
        <span className='px-2 inline-flex leading-5 rounded-full text-sm font-medium text-gray-900'>
          {crypto.index}
        </span>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 h-10 w-10'>
            <img className='h-10 w-10 rounded-full' src={crypto.image} alt='' />
          </div>
          <div className='ml-4'>
            <div className='text-sm font-medium text-gray-900'>
              {crypto.name}
            </div>
            <div className='text-sm text-gray-500'>{crypto.symbol}</div>
          </div>
        </div>
      </td>
      {/* PRICE */}
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          {numberWithCommas(crypto.current_price)}
        </div>
      </td>
      {/*  24H */}
      <td
        className={`px-6 py-4 whitespace-nowrap text-sm ${
          crypto.price_change_percentage_24h > 0
            ? 'text-green-400'
            : 'text-red-600'
        }`}
      >
        {crypto.price_change_percentage_24h}
      </td>
      {/*  7D */}
      <td
        className={`px-6 py-4 whitespace-nowrap text-sm ${
          crypto.price_change_percentage_24h > 0
            ? 'text-green-400'
            : 'text-red-600'
        }`}
      >
        {crypto.price_change_percentage_24h}
      </td>
      {/* MARKET CAP */}
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        ${numberWithCommas(crypto.market_cap)}
      </td>
      {/* VOLUME */}
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        ${numberWithCommas(crypto.total_volume)}
      </td>
      {/* CIRCULATING SUPPLYE */}
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        {numberWithCommas(crypto.circulating_supply)}
      </td>
      {/* CHART */}
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        {/* {crypto.role} */}
        Chart
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
        {/* <a href='#' className='text-indigo-600 hover:text-indigo-900'>
          Edit
        </a> */}
      </td>
    </tr>
  );
};

export default CryptoItem;
