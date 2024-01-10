import React from "react";
import EmailSubscription from "./EmailSubscription";
import lumeExpress from './assets/LumeExpress.png';
import customerSupport from './assets/customerSupport.png';
import extremeTesting from './assets/testing.png';
import "./Services.css";

const Services = () => {
  return (
    <div>
      <section className="services">
        <div className="service">
          <div className="circle" style={{ backgroundImage: `url(${extremeTesting})` }} data-toolwtip="We test our products to the absolute max so they always perform as promised.">
          </div>
          <span className="service-title">Extreme Testing</span>
          <span className="service-description">We test our products to the absolute max so they always perform as promised.</span>
        </div>

        <div className="service">
          <div className="circle" style={{ backgroundImage: `url(${lumeExpress})` }} data-tooltip="170 countries, almost all of which have a free shipping option and express delivery.">
          </div>
          <span className="service-title">Free Shipping</span>
          <span className="service-description">170 countries, almost all of which have a free shipping option and express delivery.</span>
        </div>

        <div className="service">
          <div className="circle" style={{ backgroundImage: `url(${customerSupport})` }} data-tooltip="Plus our world-class customer support team are available 24 hours a day, 7 days a week.">
          </div>
          <span className="service-title">Customer Support</span>
          <span className="service-description">Plus our world-class customer support team are available 24 hours a day, 7 days a week.</span>
        </div>
      </section>

      <section>
  {/* Return/Exchange Policies Section */}
  <div className="service">
    <h1>Return/Exchange Policies</h1>
    <span className="policy-description">
      Our return and exchange policies prioritize customer satisfaction.
    </span>
    <span className="policy-details">
      <br />
      <br />
      TIMEFRAME : You have 7 days from purchase for returns or exchanges.
      <br />
      <br />
      CONDITIONS   : Items must be unused and in original packaging.
      <br />
      <br />
      NON-RETURNABLE  : Personalized or clearance items.
      <br />
      <br />
      REFUNDS   : Processed within 2-3 days via original payment method.
      <br />
      <br />
      SHIPPING  : Customers are responsible for return shipping costs, unless the return is due to a defect or our error.
      <br />
      <br />
      INITIATING RETURNS/EXCHANGES  : Contact us at lume@gmail.com with order details.
    </span>
  </div>
</section>

      {/* Email Subscription Section */}
      <section className="email-subscription">
        <EmailSubscription />
      </section>
    </div>
  );
};

export default Services;
