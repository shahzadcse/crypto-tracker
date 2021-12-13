import React from 'react';
import './Coin.css';

const Coin = ({ image, name, symbol, price, totalVolume, priceChanged, marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                    <div className="coin-data">
                        <p className="coin-price">${price}</p>
                        <p className="coin-volume">${totalVolume.toLocaleString()}</p>
                        
                        {priceChanged < 0 ? (
                            <p className="coin-percentage red">
                                { priceChanged }
                             </p>
                        ) : (
                                <p className="coin-percentage green">
                                   { priceChanged } 
                            </p>
                        )}
                        <p className="coin-marketcap">
                           Market Cap : ${marketcap.toLocaleString()}
                        </p>
                    </div>
                </div>
                </div> 
        </div>
    )
}

export default Coin
