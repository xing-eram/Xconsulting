import React from 'react';
import SquareBox from './SquareBox';  // Asegúrate de que la ruta sea la correcta


const img1 = 'ruta/a/tu/imagen1.jpg';  // Cambia esto por la ruta correcta
const img2 = 'ruta/a/tu/imagen2.jpg';  // Cambia esto por la ruta correcta
const img3 = 'ruta/a/tu/imagen3.jpg';  // Cambia esto por la ruta correcta

const WhiteBox = () => {
  return (
    <div style={{backgroundColor: 'white'}}>
      <SquareBox title="Titulo 1" image={img1} text="Texto 1" />
      <SquareBox title="Titulo 2" image={img2} text="Texto 2" />
      <SquareBox title="Titulo 3" image={img3} text="Texto 3" />
    </div>
  );
};

export default WhiteBox;  // No olvides esta línea
