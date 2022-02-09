import React from 'react';
import '../assets/styles/components/Caroulsel.scss';


const Carousel = ({ children }) => (
    <section className="carousel">
    <div className="carousel__container">
    {children}
    </div>
    </section>
);

export default Carousel;
