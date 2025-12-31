import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Royal Gold Necklace',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Diamond Stud Earrings',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Golden Bridal Set',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1935&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Luxury Gold Bangle',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop'
  }
];

const Home = () => {
  return (
    <>
      <Hero />
      
      <section className="section-padding container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured Collection</h2>
          <p style={{ color: '#aaa' }}>Handpicked pieces for the discerning collector.</p>
        </div>
        
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-dark-gray)' }}>
        <div className="container flex" style={{ flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px' }}>
            <img 
              src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=2068&auto=format&fit=crop" 
              alt="Craftsmanship" 
              style={{ width: '100%', borderRadius: 'var(--border-radius)' }} 
            />
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Exquisite Craftsmanship</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#ccc' }}>
              At Shahid Jewelers, we believe that every piece of jewelry tells a story. Our master craftsmen combine traditional techniques with modern design to create timeless masterpieces that you will cherish forever.
            </p>
            <a href="/about" className="btn btn-outline">Read Our Story</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
