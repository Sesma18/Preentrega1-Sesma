import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '80vh', backgroundColor: '#f8f9fa' }}
    >
      <h2 className="text-secondary">{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;
