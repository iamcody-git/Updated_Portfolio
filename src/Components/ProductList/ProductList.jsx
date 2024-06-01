import "./Plist.css";
import Product from "../Product/Product";
import { products } from "../../Data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} project={item.project} link={item.link} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;