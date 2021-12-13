import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import './App.css';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false'; 



function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios
      .get(url)
      .then(res => setCoins(res.data))
      .catch( error => console.log(error))  
  })

  const handleChange =  e => {
    setSearch(e.target.value);
  }

  const filterCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="coin-app">
      <div className="coin-search">
          <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
          </form>
      </div>
     
      {filterCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            totalVolume={ coin.total_volume}
            marketcap={coin.market_cap}
            priceChanged={coin.price_change_percentage_24h}
            />
          )
            })
        }
      </div>

    
    
  );
}

export default App;
