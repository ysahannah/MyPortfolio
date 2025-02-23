import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import image1 from '../assets/1.png';
import image2 from '../assets/Leguro, Hannah Ysabelle.png';
import image3 from '../assets/Grade Viewing System.png';
import image4 from '../assets/JavaScriptDynamicPopQuiz .png';
import image5 from '../assets/FrontEnd.png';
import image6 from '../assets/INFOT7.png';
import image7 from '../assets/Screenshot from 2023-01-05 12-44-16.png';
import image8 from '../assets/Recipe App.png';

const images = [
  {
    src: image1,
    title: '3D Subdivision',
    description: '3D Object created using Blender',
  },
  {
    src: image2,
    title: '3D House',
    description: '3D Object (Blender)',
  },
  {
    src: image3,
    title: 'Grade Viewing App',
    description: 'UI Design',
  },
  {
    src: image4,
    title: 'JavaScript Dynamic Pop Quiz',
    description: 'An interactive quiz app.',
  },
  {
    src: image5,
    title: 'Front-End Project',
    description: 'HTML/CSS Project',
  },
  {
    src: image6,
    title: 'Assets Inventory',
    description: 'React Native Project',
  },
  {
    src: image7,
    title: 'Registration Form',
    description: 'Simple RF with verification code',
  },
  {
    src: image8,
    title: 'Recipe App',
    description: 'UI design',
  },
];

const MultiCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [buttonHoveredIndex, setButtonHoveredIndex] = useState(-1);
  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleViewMoreClick = (index: number) => {
    if (index === 4) {
      navigate('/frontend-project');
    }
  };

  return (
    <div>
      <Carousel 
        responsive={responsive} 
        autoPlay={true} 
        autoPlaySpeed={3000} 
        infinite={true} 
        arrows={false} 
        swipeable={true} 
      >
        {images.map((image, index) => (
          <div 
            key={index}
            style={{
              ...styles.carouselItem,
              ...(hoveredIndex === index ? styles.carouselItemHover : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <img
              src={image.src}
              alt={`item-${index}`}
              style={styles.image}
            />
            <h3 style={styles.title}>{image.title}</h3>
            <p style={styles.description}>{image.description}</p>
            <button
              style={{
                ...styles.button,
                ...(buttonHoveredIndex === index ? styles.buttonHover : {}),
              }}
              onMouseEnter={() => setButtonHoveredIndex(index)}
              onMouseLeave={() => setButtonHoveredIndex(-1)}
              onClick={() => handleViewMoreClick(index)}
            >
              View More
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  carouselItem: {
    paddingBottom: '20px',
    textAlign: 'center',
    backgroundColor: '#ffffff', 
    backdropFilter: 'blur(10px)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s',
    margin: '0 10px',
  },
  image: {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  transition: 'transform 0.3s', // Add transition for smooth effect
},

  title: {
    fontSize: '1.5rem',
    margin: '10px 0',
    color: '#1a1a2e',
  },
  description: {
    fontSize: '1rem',
    color: '#1a1a2e',
  },
  button: {
    padding: '10px 15px',
    marginTop: '10px',
    border: 'none',
    borderRadius: '0',
    backgroundColor: '#1a1a2e',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#00d2ff',
  },
  carouselItemHover: {
    transform: 'scale(1.05)', 
  },
};

export default MultiCarousel;
