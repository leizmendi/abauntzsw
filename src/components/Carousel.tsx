import React from 'react';
import Slider from 'react-slick';
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
            <img src={image.src} alt={image.altText} className={styles.carouselImage} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
