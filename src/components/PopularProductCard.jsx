
import Product from "./Product";

const PopularProductCard = ({ imgURL, title, price, clickHandler, bgGradient, btnHandler, product, atcHandler }) => {


  return (
    <Product imgURL={imgURL} title={title} price={price} clickHandler={clickHandler} bgGradient={bgGradient} btnHandler={btnHandler} product={product} atcHandler={atcHandler}/>
  );
};

export default PopularProductCard;
