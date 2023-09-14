
import Product from "./Product";

const PopularProductCard = ({ imgURL, title, price, clickHandler, bgGradient }) => {


  return (
    <Product imgURL={imgURL} title={title} price={price} clickHandler={clickHandler} bgGradient={bgGradient}/>
  );
};

export default PopularProductCard;
