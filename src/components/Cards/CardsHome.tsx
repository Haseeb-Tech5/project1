import React from "react";
import customers from "../../public/assets/customers.png";
import earning from "../../public/assets/total-earning.png";
import providers from "../../public/assets/providers.png";
import services from "../../public/assets/services.png";
import Cards from "./Cards";

interface CardProps {
  amount: string;
  title: string;
  image: string;
  homeClass?: string;
  colorClass?: string;
}

const CardsHome: React.FC = () => {
  return (
    <div className="HOME_CONTENT_main">
      <div className="HOME_CONTENT_content">
        <Cards amount="19,894.00$" title="Total earning" image={customers} />
        <Cards
          amount="18,454.00"
          title="Commission earning"
          image={earning}
          homeClass="HOME_commission"
          colorClass="HOME_green"
        />
        <Cards
          amount="140.00"
          title="Total Fee Earning"
          image={providers}
          homeClass="HOME_provider"
          colorClass="HOME_orange"
        />
        <Cards
          amount="8"
          title="Providers"
          image={services}
          homeClass="HOME_settings"
          colorClass="HOME_blue"
        />
      </div>
    </div>
  );
};

export default CardsHome;
