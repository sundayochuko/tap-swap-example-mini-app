// src/components/BotComponent.tsx
import React from "react";

const BotComponent: React.FC = () => {
  return (
    <div className="card_div">
      <h1 className="header_text">Community Miner</h1>
      <button className="earn_button">
        Click to learn how to earn airdrop points
      </button>
      <div className="buttons_div">
        <button className="default_button">
          Airdrop points <br /> xx
        </button>
        <button className="default_button">
          Mining rewards <br /> xx
        </button>
        <button className="default_button">
          Miner race ranking <br /> xx
        </button>
      </div>
      <div className="text_based_buttons">
        <a href="/#">Device</a>
        <a href="/#">Status</a>
        <a href="/#">Airdrop points</a>
        <a href="/#">Mining rewards</a>
      </div>
      <div className="buttons_div_2">
        <button className="default_button_2">Home</button>
        <button className="default_button_2">Miners race</button>
        <button className="default_button_2">Referral</button>
        <button className="default_button_2">Task</button>
        <button className="default_button_2">Profile</button>
      </div>
    </div>
  );
};

export default BotComponent;
