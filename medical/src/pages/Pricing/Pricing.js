import React, { useEffect } from "react";
import "./Pricing.css";
import PricingDetails from "./PricingDetails";
import PricingHeader from "./PricingHeader";
import PricingCard from "./PricingCard";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="price">
      <PricingHeader />
      <PricingDetails />
      <PricingCard />
    </div>
  );
};

export default Pricing;
