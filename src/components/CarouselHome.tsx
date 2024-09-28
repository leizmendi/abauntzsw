import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './CarouselHome.module.css';

interface ImageData {
  src: string;
  altText: string;
}

interface CarouselProps {
  images: ImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: false, // No mostrar puntos de navegación
    arrows: false, // No mostrar flechas
    infinite: true, // Bucle infinito
    autoplay: true, // Autoplay activado
    autoplaySpeed: 5000, // Intervalo de autoplay en milisegundos
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Mostrar una imagen a la vez
    slidesToScroll: 1, // Desplazarse una imagen a la vez
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // No se necesita actualizar el estado currentSlide
    },5000);// settings.autoplaySpeed);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className= {styles.carouselContainer}>
        <Slider {...settings}>
        {images.map((image, index) => (
            <div key={index}>
            <img src={image.src} 
                 alt={image.altText}
            />
            </div>
        ))}
        </Slider>
    </div>
  );
};

export default Carousel;