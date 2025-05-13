import React from 'react';
import './aboutus.css';
import image1 from '../aboutuspics/A1.jpg';
import image2 from '../aboutuspics/A3.jpg';
import image3 from '../aboutuspics/A2.jpg';
import image4 from '../aboutuspics/A5.jpg';
import image5 from '../aboutuspics/A4.jpg';

const About = () => {
  const images = [image1, image2, image3, image4, image5, image1, image2, image3, image4, image5];

  return (
    <section id="about" className="about-section">

      <div className="about-container">
        <h2 className="about-header">About Us</h2>
        
        <div className="about-content">
          <div className="about-column mission">
            <h3>Mission</h3>
            <p>
              Our mission is to serve the highest quality coffee while creating a warm, welcoming environment 
              where people can connect, work, and relax. We source our beans ethically and roast them to perfection 
              to deliver an exceptional coffee experience every time.
            </p>
          </div>
          
          <div className="about-column vision">
            <h3>Vision</h3>
            <p>
              We envision a world where every coffee break becomes a moment of joy and connection. 
              Through sustainable practices and community engagement, we aim to be more than just a coffee shop - 
              we strive to be a hub for creativity and meaningful conversations in every neighborhood we serve.
            </p>
          </div>
        </div>

        <div className="story-section">
          <h3 className="story-header">Bleu Bean Story</h3>
          <div className="story-content">
            <p>
              At Bleu Bean Cafe, we think that each cup of coffee holds a story. Our adventure began with a passion for outstanding coffee and a desire to create a cozy haven for coffee lovers.
            </p>
            <p>
              Our tagline: "Feeling blue? It's time to take your coffee." We understand that some days are tougher than others. That's why we're here: to lift your spirits with a relaxing coffee experience. Let our baristas offer you a reminder that brighter things are just a sip away.
            </p>
            <p className="join-story">
              <strong>Join Our Story.</strong> Bleu Bean Cafe is not only a coffee shop, it is a community. We want you to be a part of our stories, to make memories, and to enjoy the simple pleasures of a well-crafted beverage. At Bleu Bean Cafe, we turn blue moments into warm memories. Step into Bleu Bean Cafe and leave the world behind, one cup at a time.
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="carousel-images">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Bleu Bean ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
