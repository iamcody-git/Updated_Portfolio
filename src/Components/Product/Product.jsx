import "./Product.css";

const Product = ({project,link, description}) => {
  return (
    <div className="p">
      <a href={link} target="_blank" rel="noreferrer">
        <p className="pro">{project}</p>
      </a>
      <div className="d-desc">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Product;