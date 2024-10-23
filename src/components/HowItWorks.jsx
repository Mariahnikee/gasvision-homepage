import React from 'react';

const cards = [
  {
    id: 1,
    icon: <i className="fa fa-flag" aria-hidden="true"></i>,
    title: 'Reports Incident',
    description: 'Report gas incidents quickly and easily. Our platform makes it simple to submit a report and ensure action is taken quickly.',
  },
  {
    id: 2,
    icon: <i className="fa fa-tint" aria-hidden="true"></i>,
    title: 'Order Cooking Gas',
    description: 'Easily order cooking gas for home delivery. Just place your order online, and we will deliver gas to your home.',
  },
  {
    id: 3,
    icon: <i className="fa fa-shopping-cart" aria-hidden="true"></i>,
    title: 'Buy Gas Cylinders',
    description: 'Purchase and replace gas cylinders as needed with ease, with convenient payment options and delivery service.',
  }
];

function HowItWorks() {
  return (
    <div className="bg-white px-14 py-10"> 
      <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl mb-6">The Platform Just For You</h2>
      <p className="text-gray-600 text-sm sm:text-base mb-10 max-w-2xl">
        GasVision makes it easy to handle all your gas needs with a few simple steps, from ordering and delivery to incident reporting.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(card => (
          <div 
            key={card.id} 
            className="bg-green-800 text-white p-6 rounded-lg hover:bg-yellow-700 hover:text-black transition-all duration-300 mx-auto"
            style={{ maxWidth: '320px', maxHeight: '350px' }}
          >
            <div className="text-yellow-300 text-4xl mb-10">{card.icon}</div>
            <h4 className="text-yellow-300 text-lg font-semibold mb-3">{card.title}</h4>
            <p className="text-sm text-green-100">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
