import React, { useState } from 'react';

const Pricing = () => {
  const [price, setPrice] = useState('');

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Price per night</h1>
      <div className="flex space-x-4">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">How much do you want to charge per night?</h2>
          <label className="block text-gray-700 mb-1" htmlFor="price">
            Price guests pay
          </label>
          <div className="flex items-center mb-4">
            <span className="mr-2">INR</span>
            <input
              type="number"
              id="price"
              value={price}
              onChange={handlePriceChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <p className="text-gray-500">Including taxes, commission, and fees</p>
        </div>
        <div className="flex-1 bg-gray-100 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">What if I'm not sure about my price?</h2>
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="text-gray-700">
            Don't worry, you can always change it later. You can even set weekend, midweek, and seasonal prices,
            giving you more control over what you earn.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Back</button>
        <button
          className={`px-4 py-2 rounded ${price ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          disabled={!price}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Pricing;
