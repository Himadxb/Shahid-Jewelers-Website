import React from 'react';
import { useGold } from '../context/GoldContext';
import { TrendingUp, TrendingDown, Minus, RefreshCw } from 'lucide-react';

const LiveGold = () => {
  const { goldPriceAED, goldPriceUSD, lastUpdated, trend } = useGold();

  // Constants for conversion
  const GRAMS_PER_OZ = 31.1034768;
  const GRAMS_PER_TOLA = 11.6638038;

  // Calculations AED
  const pricePerGram24K_AED = goldPriceAED / GRAMS_PER_OZ;
  const pricePerGram22K_AED = pricePerGram24K_AED * (22 / 24);
  const pricePerGram21K_AED = pricePerGram24K_AED * (21 / 24);
  const pricePerGram18K_AED = pricePerGram24K_AED * (18 / 24);
  const pricePerTola_AED = pricePerGram24K_AED * GRAMS_PER_TOLA;
  const pricePerKG_AED = pricePerGram24K_AED * 1000;

  // Calculations USD
  const pricePerGram24K_USD = goldPriceUSD / GRAMS_PER_OZ;
  const pricePerGram22K_USD = pricePerGram24K_USD * (22 / 24);
  const pricePerGram21K_USD = pricePerGram24K_USD * (21 / 24);
  const pricePerGram18K_USD = pricePerGram24K_USD * (18 / 24);
  const pricePerTola_USD = pricePerGram24K_USD * GRAMS_PER_TOLA;
  const pricePerKG_USD = pricePerGram24K_USD * 1000;

  const getTrendIcon = () => {
    if (trend === 'up') return <TrendingUp size={24} color="#4CAF50" />;
    if (trend === 'down') return <TrendingDown size={24} color="#F44336" />;
    return <Minus size={24} color="#9E9E9E" />;
  };

  const formatCurrency = (val) => {
    return val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="container section-padding">
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Live Gold Rates</h1>
        <div className="flex items-center justify-center gap-2" style={{ color: '#888' }}>
          <RefreshCw size={16} className={trend !== 'neutral' ? 'spin' : ''} />
          <span>Last Updated: {lastUpdated ? lastUpdated.toLocaleTimeString() : 'Loading...'}</span>
        </div>
      </div>

      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        backgroundColor: 'var(--color-dark-gray)', 
        borderRadius: 'var(--border-radius)', 
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}>
        <div className="flex justify-between items-center" style={{ marginBottom: '2rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-white)' }}>Spot Gold</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
               <span style={{ fontSize: '1.2rem', color: '#888' }}>USD</span>
               <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-gold-primary)' }}>
                ${formatCurrency(goldPriceUSD)}
              </span>
            </div>
            <div style={{ width: '1px', height: '40px', backgroundColor: '#333' }}></div>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: '1.2rem', color: '#888' }}>AED</span>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-gold-primary)' }}>
                {formatCurrency(goldPriceAED)}
              </span>
            </div>
            {getTrendIcon()}
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #333', textAlign: 'left' }}>
              <th style={{ padding: '1rem', color: '#888' }}>Unit</th>
              <th style={{ padding: '1rem', color: '#888', textAlign: 'right' }}>Price (USD)</th>
              <th style={{ padding: '1rem', color: '#888', textAlign: 'right' }}>Price (AED)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: '24K Gold / gram', valueAED: pricePerGram24K_AED, valueUSD: pricePerGram24K_USD },
              { label: '22K Gold / gram', valueAED: pricePerGram22K_AED, valueUSD: pricePerGram22K_USD },
              { label: '21K Gold / gram', valueAED: pricePerGram21K_AED, valueUSD: pricePerGram21K_USD },
              { label: '18K Gold / gram', valueAED: pricePerGram18K_AED, valueUSD: pricePerGram18K_USD },
              { label: 'Spot Gold / oz', valueAED: goldPriceAED, valueUSD: goldPriceUSD },
              { label: 'Gold / tola', valueAED: pricePerTola_AED, valueUSD: pricePerTola_USD },
              { label: 'Gold / KG', valueAED: pricePerKG_AED, valueUSD: pricePerKG_USD },
            ].map((item, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #222' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '500' }}>{item.label}</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'right', fontWeight: 'bold', color: 'var(--color-white)' }}>
                  ${formatCurrency(item.valueUSD)}
                </td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'right', fontWeight: 'bold', color: 'var(--color-gold-light)' }}>
                  {formatCurrency(item.valueAED)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="text-center" style={{ marginTop: '2rem', color: '#666', fontSize: '0.9rem' }}>
        <p>* Rates are for reference only and may vary slightly from store prices.</p>
      </div>
    </div>
  );
};

export default LiveGold;
