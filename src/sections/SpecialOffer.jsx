import { arrowRight } from "../assets/icons";
import img from '../assets/section/2.png'
import { Button } from "../components";

const SpecialOffer = ({bgColor, txtColor, border}) => {
  return (
    <section className=' flex justify-between items-start max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 '>
        <img src={img} alt='Shoe Promotion' className='object-contain w-full rounded-2xl ' />
      </div>
      <div className='flex flex-1 flex-col justify-start '>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className={`${txtColor}`}>Unique </span>
          Selling Features
        </h2>
        <p className='mt-4 info-text '>
 <br></br>

🌬️ <strong>Sensational Flavors:</strong> Immerse yourself in a vast array of delicious, true-to-life flavors, meticulously crafted to satisfy your taste buds with every puff. From classic tobacco to exotic fruit blends, our Pods and Vapes deliver an unparalleled taste sensation.<br></br>  <br></br>

📦 <strong>Ultimate Convenience:</strong> Say goodbye to messy refills and complicated setups. Our Pods and Vapes feature hassle-free, pre-filled cartridges, ensuring a seamless and mess-free vaping experience. Enjoy the freedom to vape anytime, anywhere.<br></br> <br></br>

🔋 <strong>Long-lasting Power:</strong> Don't let a dead battery ruin your day. Our cutting-edge battery technology ensures extended usage on a single charge, so you can enjoy your favorite flavors without interruption.<br></br> <br></br>

🔒 <strong>Safety First:</strong> Your well-being matters. Our Pods and Vapes prioritize safety with state-of-the-art temperature control and overcharge protection, giving you peace of mind while you vape.<br></br> <br></br>

🌟 <strong>Sleek and Stylish Design:</strong> Elevate your style with our sleek, modern designs. Our Pods and Vapes are as much a fashion statement as they are a vaping device, making you the envy of your friends.<br></br>


        </p>
        <div className='mt-11 flex flex-wrap gap-4 '>
          <Button label='Shop now' iconURL={arrowRight} backgroundColor={bgColor} textColor='text-white' borderColor={border}/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
