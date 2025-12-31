import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import SpotlightCard from '../components/SpotlightCard';

const products = [
  { id: 1, name: 'Royal Gold Necklace', price: 12500, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1974&auto=format&fit=crop' },
  { id: 2, name: 'Diamond Stud Earrings', price: 4500, category: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1974&auto=format&fit=crop' },
  { id: 3, name: 'Golden Bridal Set', price: 25000, category: 'Sets', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1935&auto=format&fit=crop' },
  { id: 4, name: 'Luxury Gold Bangle', price: 8900, category: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, name: 'Emerald & Gold Ring', price: 3200, category: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop' },
  { id: 6, name: 'Rose Gold Pendant', price: 1800, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop' },
];

const categories = ['All', 'Necklaces', 'Earrings', 'Rings', 'Bracelets', 'Sets'];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="container section-padding">
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h1>Shop Collection</h1>
        <p style={{ color: '#aaa' }}>Explore our exclusive range of fine jewelry.</p>
      </div>

      <div className="flex" style={{ gap: '2rem', flexDirection: 'column' }}>
        {/* Filters */}
        <div className="flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
          <div className="flex gap-4" style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{ 
                  background: 'transparent', 
                  color: activeCategory === cat ? 'var(--color-gold-primary)' : 'var(--color-white)',
                  border: activeCategory === cat ? '1px solid var(--color-gold-primary)' : '1px solid transparent',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  transition: 'all 0.3s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <span style={{ color: '#888' }}>Showing {filteredProducts.length} results</span>
        </div>

        {/* Grid */}
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
          {filteredProducts.map(product => (
            <SpotlightCard key={product.id} spotlightColor="rgba(212, 175, 55, 0.2)">
              <ProductCard product={product} />
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
