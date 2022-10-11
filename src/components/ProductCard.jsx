import "../css/ProductCard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBag } from "../redux/customerSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleClick = async () => {
    dispatch(addToBag(product));
  };
  return (
    <div className="mt-5 mb-5">
      <div className="card-watch-imge">
        <Link to={`/product/${product.slug}`}>
          <img
            className="mb-4 img-product-card img-back "
            src={process.env.REACT_APP_STORAGE_URL + product.image}
            alt="Product"
          />
          <img
            className="mb-4 img-product-card img-top"
            src={process.env.REACT_APP_STORAGE_URL + product.imageBack}
            alt="Product Back"
          />
        </Link>
      </div>
      <div>
        <h6 className="fw-bold text-start model-product-card">{product.name}</h6>
        <p className="fw-bold text-start price-product-card mt-1 fs-6">$USD {product.price}</p>
        <p className="text-start impuestos-product-card">SALES TAX INCLUDED</p>
        <div className="d-flex">
          <button className="add-bag" onClick={handleClick}>
            PURCHASE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
