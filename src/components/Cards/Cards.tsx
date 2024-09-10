import Image from "next/image";
import React from "react";

// Define the type for Card props
interface CardProps {
  amount: string;
  title: string;
  image: string;
  colorClass?: string;
  homeClass?: string;
}

const Cards: React.FC<CardProps> = ({
  amount,
  title,
  image,
  colorClass = "",
  homeClass = "",
}) => {
  return (
    <div className={`HOME_total_earing ${homeClass}`}>
      <div className="HOME_earing_combine">
        <div className="HOME_earing">
          <h2>{amount}</h2>
        </div>
        <div className="TOTAL_text">
          <h2>{title}</h2>
        </div>
      </div>
      <div className={`HOME_clippath ${colorClass}`}></div>
      <div className="HOME_providers">
        <Image src={image} alt={title} />
      </div>
    </div>
  );
};

export default Cards;
