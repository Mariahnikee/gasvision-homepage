import React from 'react';

const solutions = [
  {
    id: 1,
    icon: <i className="fa fa-address-card" aria-hidden="true"></i>,
    title: 'Smart Alerts',
    description: 'Receive timely notifications about your gas level and get reminders to refill on time. Receive timely notifications about your gas level and get reminders to refill on time',
  },
  {
    id: 2,
    icon: <i className="fa fa-address-card" aria-hidden="true"></i>,
    title: 'Incident Reporting',
    description: 'Easily report and track gas-related incidents with our efficient reporting tool. Easily report and track gas-related incidents with our efficient reporting tool',
  },
  {
    id: 3,
    icon: <i className="fa fa-address-card" aria-hidden="true"></i>,
    title: 'Buy Gas Accessories',
    description: 'Shop for gas accessories like cylinders and valves through our online store. Shop for gas accessories like cylinders and valves through our online store',
  },
  {
    id: 4,
    icon: <i className="fa fa-address-card" aria-hidden="true"></i>,
    title: 'Easy Gas Ordering',
    description: 'Order gas with just a few taps and get it delivered to your doorstep. Order gas with just a few taps and get it delivered to your doorstep.',
  },
];

function KeyFeatures() {
  return (
    <div className="bg-gray-100 px-14 py-4 lg:px-20">
      <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl mb-8 text-start">
        Smart Solutions for Modern Living
      </h2>
      <p className="text-gray-600 text-sm sm:text-base mb-12 max-w-3xl text-start">
        GasVision makes managing your gas supply easy and convenient with
        <br /> features designed for your everyday needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-14 lg:gap-20 max-w-screen-lg mx-auto">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="bg-blue-950 text-white p-8 rounded-lg shadow-lg hover:bg-blue-900 hover:text-black transition-all duration-300 w-full max-w-md mx-auto"
            style={{ maxWidth: '600px', maxHeight: '450px' }}
          >
            <div className="text-3xl text-green-700 mb-12">{solution.icon}</div>
            <h4 className="text-lg text-yellow-300 font-semibold mb-3">
              {solution.title}
            </h4>
            <p className="text-sm text-blue-200">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyFeatures;
