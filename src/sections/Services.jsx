import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = ({bgColor}) => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} bgColor={bgColor}/>
      ))}
    </section>
  );
};

export default Services;
