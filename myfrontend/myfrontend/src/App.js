import React from 'react';
import './App.css';
import NavBar from './components/NavBar';  // Importa el componente NavBar
import MediaBox from './components/MediaBox';  // Importa el componente MediaBox
import WhiteBox from './components/WhiteBox';  // Importa el componente WhiteBox

function App() {
  return (
    <div className="App">
      <NavBar />  {/* Usa el componente NavBar */}
      <MediaBox />  {/* Usa el componente MediaBox */}
      <WhiteBox />  {/* Usa el componente WhiteBox */}
      {/* Otros componentes aquí */}
    </div>
  );
}

export default App;
