import Service from "../components/Service";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container gradient__container">
        <h2 className="services-heading">Services we can help with</h2>

        <div className="service-container">
          {services.map((service) => (
            <Service {...service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
