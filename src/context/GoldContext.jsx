import React, { createContext, useState, useEffect, useContext } from 'react';

const GoldContext = createContext();

export const useGold = () => useContext(GoldContext);

export const GoldProvider = ({ children }) => {
  const [goldPriceUSD, setGoldPriceUSD] = useState(0);
  const [goldPriceAED, setGoldPriceAED] = useState(0);
  const [trend, setTrend] = useState('neutral'); // 'up', 'down', 'neutral'
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchGoldPrice = async () => {
    try {
      // Using data-asg.goldprice.org which is a common free endpoint used by widgets
      const response = await fetch('https://data-asg.goldprice.org/dbXRates/USD,AED');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Received non-JSON response from API");
      }

      const data = await response.json();
      
      if (data.items) {
        const usdItem = data.items.find(item => item.curr === 'USD');
        const aedItem = data.items.find(item => item.curr === 'AED');

        if (usdItem && aedItem) {
          setGoldPriceUSD(prev => {
            if (usdItem.xauPrice > prev) setTrend('up');
            else if (usdItem.xauPrice < prev) setTrend('down');
            return usdItem.xauPrice;
          });
          setGoldPriceAED(aedItem.xauPrice);
          setLastUpdated(new Date());
          return; // Success, exit function
        }
      }
      throw new Error("Invalid data format received");
    } catch (error) {
      console.warn("Failed to fetch gold price, using fallback data:", error);
      // Fallback data (approximate values)
      setGoldPriceUSD(2650.50);
      setGoldPriceAED(9735.25);
      setTrend('neutral');
      setLastUpdated(new Date());
    }
  };

  useEffect(() => {
    fetchGoldPrice();
    const interval = setInterval(fetchGoldPrice, 10000); // Update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <GoldContext.Provider value={{ goldPriceUSD, goldPriceAED, trend, lastUpdated }}>
      {children}
    </GoldContext.Provider>
  );
};
