import React from 'react';
import Image from 'next/image';
import styles from './Slider.module.css'; // Importar el módulo CSS

interface Slide {
  image: string;
  altText: string;
  description: string;
}

interface SliderProps {
  slides: Slide[];
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

export const Slider: React.FC<SliderProps> = ({ slides, currentSlide, nextSlide, prevSlide }) => {
  if (!slides || slides.length === 0) {
    return <div>No hay diapositivas disponibles</div>;
  }

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slide}>
        <Image width={1200} height={80} src={slides[currentSlide].image} alt={slides[currentSlide].altText } />
        <p>{slides[currentSlide].description}</p>
      </div>
    </div>
  );
};

//export default Slider;
