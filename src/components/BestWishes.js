import React from 'react';

function BestWishes() {
  const wishesGroups = [
    { 
      name: 'Baasha Boys', 
      image: require('../assets/images/baashaboys.jpeg')
    },
    { 
      name: 'Official Rex', 
      image: require('../assets/images/baashaboys.jpeg')
    },
    { 
      name: 'Psycho Troopers', 
      image: require('../assets/images/baashaboys.jpeg')
    },
    { 
      name: 'AMOS Boys & Girls', 
      image: require('../assets/images/baashaboys.jpeg')
    },
    { 
      name: 'Fun Friday Gang', 
      image: require('../assets/images/baashaboys.jpeg')
    }
  ];

  return (
    <section className="best-wishes section-padding" id="bestwishes">
      <div className="container">
        <div className="wishes-header">
          <span className="wishes-subtitle">HEARTFELT SHOUTOUTS</span>
          <h2 className="wishes-title">We Are Grateful For Your Blessings</h2>
          <div className="wishes-title-divider">
            <span className="divider-line"></span>
            <span className="divider-icon">♥</span>
            <span className="divider-line"></span>
          </div>
        </div>

        <div className="wishes-grid">
          {wishesGroups.map((group, index) => (
            <div 
              key={index} 
              className="wish-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="wish-image-wrapper">
                <img 
                  src={group.image} 
                  alt={group.name}
                  className="wish-image"
                />
              </div>
              <h3 className="wish-name">{group.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestWishes;