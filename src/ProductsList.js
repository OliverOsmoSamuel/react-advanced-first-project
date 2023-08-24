import axios from "axios";
import Product from "./Product";
import "./ProductsList.css";
const api = "https://fakestoreapi.com/products/";

const { data: products } = await axios.get(api);

const ProductsList = () => {
  console.log(products);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product?.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
