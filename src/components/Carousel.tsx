import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css'; // Tu archivo CSS

interface ImageData {
  src: string;
  altText: string;
}

interface CarouselProps {
  images: ImageData[];
  //onSlideChange: (currentIndex: number) => void; // Función que notifica el cambio de slide
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  
  const settings = {
    dots: true, 
    infinite: true, 
    autoplay: true, 
    autoplaySpeed: 5000, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    //afterChange: (current: number) => onSlideChange(current), // Notificar cambio
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image 
              src={image.src} 
              alt={image.altText} 
              width={1920}
              height={1080}
              className={styles.carouselImage}
              priority={index === 0} // Cargar la primera imagen con prioridad
             />
            {/* Pie de foto */}
            <p className={styles.caption}>{image.altText}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
