import React from 'react';

function Header() {
  return (
    <header className='flex flex-col items-center text-center  py-8'>
      <div>
        <h1 className="text-5xl font-bold text-gray-800 px-14 mt-6 mx-auto">
          Transform Your Gas <span className="text-yellow-300">Management</span>
        </h1>
        <p className='font-semibold text-gray-600 mt-6 max-w-x2 mx-auto'>
          with GasVision you can order gas online, buy gas cylinders & accessories as well as <br></br>
          <span className='text-yellow-300'> report any fire incidents </span> 
          all in one solution!
        </p>
      </div>

      <div className="mt-8">
        <button className="bg-green-800 text-yellow-300 px-6 py-2 rounded shadow-md hover:bg-green-700 transition duration-200">
          Try it now
        </button>
      </div>

      <div className="mt-8">
        <img src='./images/product8.jpeg' alt="Gas product" className="w-full max-w-md rounded-lg" />
      </div>
    </header>
  );
}

export default Header;
