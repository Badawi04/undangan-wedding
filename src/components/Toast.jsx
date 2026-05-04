import React from 'react';

const Toast = ({ message, show }) => {
  return (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
      show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
