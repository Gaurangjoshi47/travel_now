import React from 'react';
import './Destination.css';

const destinations = [
  {
    name: "Paris",
    image: "/src/assets/images/paris.jpg",
    description: "The city of lights and love.",
    rating: 4.8,
  },
  {
    name: "Bali",
    image: "/src/assets/images/bali.jpg",
    description: "A tropical paradise to relax in.",
    rating: 4.6,
  },
  {
    name: "New York",
    image: "/src/assets/images/nyc.jpg",
    description: "The city that never sleeps.",
    rating: 4.5,
  },
  {
    name: "Tokyo",
    image: "/src/assets/images/tokyo.jpg",
    description: "A perfect mix of tradition and tech.",
    rating: 4.7,
  },
  {
    name: "Rome",
    image: "/src/assets/images/rome.jpg",
    description: "Explore ancient ruins and world-class art.",
    rating: 4.7,
  },
  {
    name: "Sydney",
    image: "/src/assets/images/sydney.jpg",
    description: "Iconic beaches and the Opera House await.",
    rating: 4.6,
  },
  {
    name: "Dubai",
    image: "/src/assets/images/dubai.jpg",
    description: "Luxury shopping, skyscrapers, and desert fun.",
    rating: 4.6,
  },
  {
    name: "Cape Town",
    image: "/src/assets/images/capetown.jpg",
    description: "A stunning coastal city with mountain views.",
    rating: 4.8,
  },
  {
    name: "London",
    image: "/src/assets/images/london.jpg",
    description: "Classic sights and modern culture.",
    rating: 4.7,
  },
  {
    name: "Maldives",
    image: "/src/assets/images/maldives.jpg",
    description: "Crystal-clear waters and overwater villas.",
    rating: 4.9,
  }
];

function Destination() {
  return (
    <div className="destination">
      <h2>Explore Our Destinations</h2>
      <div className="destination-list">
        {destinations.map((dest, index) => (
          <div className="destination-card" key={index}>
            <img src={dest.image} alt={dest.name} />
            <div className="details">
              <h3>{dest.name}</h3>
              <p>{dest.description}</p>
              <span className="rating">⭐ {dest.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
