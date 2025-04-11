import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <FaShoppingCart size={24} color="white" />
      <span
        style={{
          position: 'absolute',
          top: -8,
          right: -8,
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '12px',
          fontWeight: 'bold',
          boxShadow: '0 0 5px rgba(0,0,0,0.5)',
          animation: 'pulse 1s infinite ease-in-out',
        }}
      >
        3
      </span>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}

export default CartWidget;
