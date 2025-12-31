import React from 'react';
import { useGold } from '../context/GoldContext';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const GoldTicker = () => {
  const { goldPriceUSD, goldPriceAED, trend } = useGold();

  const getIcon = () => {
    if (trend === 'up') return <TrendingUp size={16} color="#4CAF50" />;
    if (trend === 'down') return <TrendingDown size={16} color="#F44336" />;
    return <Minus size={16} color="#9E9E9E" />;
  };

  const getColor = () => {
    if (trend === 'up') return '#4CAF50';
    if (trend === 'down') return '#F44336';
    return '#9E9E9E';
  };

  return (
    <div style={{ 
      backgroundColor: '#111', 
      borderBottom: '1px solid var(--color-gold-dark)', 
      padding: '0.5rem 0',
      fontSize: '0.9rem',
      color: 'var(--color-light-gray)'
    }}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span style={{ color: 'var(--color-gold-primary)', fontWeight: 'bold' }}>LIVE GOLD RATE (24K 1oz)</span>
          <div className="flex items-center gap-2">
            <span>USD: ${goldPriceUSD.toLocaleString()}</span>
            <span style={{ color: getColor() }}>{getIcon()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>AED: {goldPriceAED.toLocaleString()} AED</span>
            <span style={{ color: getColor() }}>{getIcon()}</span>
          </div>
        </div>
        <div className="hidden-mobile">
          <span>Free Shipping on Orders Over 5000 AED</span>
        </div>
      </div>
    </div>
  );
};

export default GoldTicker;
