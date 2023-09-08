import React, { useState } from 'react';
import './Slider.css';

const SliderComponent = () => {
    const [index, setIndex] = useState(0);
    const slides = ['1.png', '2.png', '3.png', '4.png'];  // Reemplaza esto con la lista de imágenes que desees.

    const next = () => {
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <section className="home" id="home">
            {slides.map((slide, i) => (
                <div key={i} className={`slide-container ${i === index ? 'active' : ''}`}>
                    <div className="slide">
                        <div className="content">
                            <span> Shoes</span>
                            <h3> Shoes</h3>
                            <p>Lorem ipsum, dolor sit amet...</p>
                            <button className="btn">add to card</button>
                        </div>
                        <div className="image">
                            <img src={`img/slide/${slide}`} className="shoe" alt={`Slide ${i}`} />
                        </div>
                    </div>
                </div>
            ))}
            <div id="prev" className="fa fa-angle-left" onClick={prev}></div>
            <div id="next" className="fa fa-angle-right" onClick={next}></div>
        </section>
    );
};

export default SliderComponent;
