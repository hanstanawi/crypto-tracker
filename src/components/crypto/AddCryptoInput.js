import React from 'react';

const AddCryptoInput = () => {
  return (
    <form className='my-4 sm:flex sm:max-w-md'>
      <label htmlFor='email-address' className='sr-only'>
        Add Crypto
      </label>
      <input
        type='text'
        name='crypto'
        className='appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:placeholder-gray-400'
        placeholder='Enter Crypto Name or Ticker'
      />
      <div className='mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
        <button
          type='submit'
          className='w-full flex items-center justify-center bg-green-500 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-green-700 hover:to-green-700'
        >
          Add Crypto
        </button>
      </div>
    </form>
  );
};

export default AddCryptoInput;
