import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const galleryImages = [
  { id: 1, src: '/src/assets/images/paris.jpg', alt: 'Paris' },
  { id: 2, src: '/src/assets/images/bali.jpg', alt: 'Bali' },
  { id: 3, src: '/src/assets/images/nyc.jpg', alt: 'New York' },
  { id: 4, src: '/src/assets/images/tokyo.jpg', alt: 'Tokyo' },
  { id: 5, src: '/src/assets/images/rome.jpg', alt: 'Rome' },
  { id: 6, src: '/src/assets/images/sydney.jpg', alt: 'Sydney' },
  { id: 7, src: '/src/assets/images/dubai.jpg', alt: 'Dubai' },
  { id: 8, src: '/src/assets/images/capetown.jpg', alt: 'Cape Town' },
  { id: 9, src: '/src/assets/images/london.jpg', alt: 'London' },
  { id: 10, src: '/src/assets/images/maldives.jpg', alt: 'Maldives' }
];

function Gallery() {
  return (
    <div className="gallery-page">
      <h2>Explore Our Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((img) => (
          <Link to={`/destination/${img.alt.toLowerCase().replace(/\s+/g, '-')}`} key={img.id}>
            <div className="gallery-card">
              <img src={img.src} alt={img.alt} />
              <div className="overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
