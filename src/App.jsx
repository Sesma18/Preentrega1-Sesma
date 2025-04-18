import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda de discos de Soda Stereo!" />
    </div>
  );
}

export default App;