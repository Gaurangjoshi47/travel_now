import React from 'react';
import './Home.css';

const destinations = [
  {
    id: 1,
    name: "Paris",
    image: "/src/assets/images/paris.jpg",
    description: "The city of lights and love.",
  },
  {
    id: 2,
    name: "Bali",
    image: "/src/assets/images/bali.jpg",
    description: "A tropical paradise to relax in.",
  },
  {
    id: 3,
    name: "New York",
    image: "/src/assets/images/nyc.jpg",
    description: "The city that never sleeps.",
  },
  {
    id: 4,
    name: "Tokyo",
    image: "/src/assets/images/tokyo.jpg",
    description: "A perfect mix of tradition and tech.",
  },
  {
    id: 5,
    name: "Rome",
    image: "/src/assets/images/rome.jpg",
    description: "Explore ancient ruins and world-class art.",
  },
  {
    id: 6,
    name: "Sydney",
    image: "/src/assets/images/sydney.jpg",
    description: "Iconic beaches and the Opera House await.",
  },
  {
    id: 7,
    name: "Dubai",
    image: "/src/assets/images/dubai.jpg",
    description: "Luxury shopping, skyscrapers, and desert fun.",
  },
  {
    id: 8,
    name: "Cape Town",
    image: "/src/assets/images/capetown.jpg",
    description: "A stunning coastal city with mountain views.",
  },
  {
    id: 9,
    name: "London",
    image: "/src/assets/images/london.jpg",
    description: "Classic sights and modern culture.",
  },
  {
    id: 10,
    name: "Maldives",
    image: "/src/assets/images/maldives.jpg",
    description: "Crystal-clear waters and overwater villas.",
  }
];

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Discover Your Next Destination</h1>
          <p>Plan your dream vacation with our top hand-picked places around the globe.</p>
          <a href="#destinations" className="explore-btn">Explore Now</a>
        </div>
      </div>

      {/* Destinations */}
      <section className="destinations-wrapper" id="destinations">
        <h2>Popular Destinations</h2>
        <p className="subtitle">From iconic cities to hidden gems, find your perfect escape below.</p>
        <div className="destinations">
          {destinations.map((dest) => (
            <div className="card" key={dest.id}>
              <img src={dest.image} alt={dest.name} />
              <h3>{dest.name}</h3>
              <p>{dest.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <h2 className="reviews-title">What Travelers Say</h2>
        <div className="review-cards">
          <div className="review-card animated-card">
            <p>“An unforgettable experience in Bali. Everything was perfectly arranged!”</p>
            <h4>- Ayesha R.</h4>
          </div>
          <div className="review-card animated-card" style={{ animationDelay: '0.3s' }}>
            <p>“Loved the Tokyo tour! Great service and amazing guides.”</p>
            <h4>- Raj M.</h4>
          </div>
          <div className="review-card animated-card" style={{ animationDelay: '0.6s' }}>
            <p>“Smooth booking and wonderful support. Visited Rome stress-free!”</p>
            <h4>- Priya K.</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
