import CloseButton from "react-bootstrap/CloseButton";
import { useDispatch } from "react-redux";
import { reduceQty, addToBag, removeFromBag } from "../redux/customerSlice";

function BagCard({ product }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromBag(product.id));
  };

  const handleAddQty = () => {
    dispatch(addToBag(product));
  };
  const handleLowQty = () => {
    dispatch(reduceQty(product));
  };

  return (
    <div className="row grey-color">
      <div className="col-3 mb-3">
        <img
          className="img-fluid img-card"
          src={process.env.REACT_APP_STORAGE_URL + product.image}
          alt="Luminor Collection"
        />
      </div>
      <div className="col-6 text-start fw-bold">
        <p className=" ">{product.name}</p>
        <button onClick={handleLowQty} id="quantity-les">
          -
        </button>
        <span className="mx-2  p-2">{product.qty}</span>
        <button onClick={handleAddQty} id="quantity-add">
          +
        </button>
      </div>
      <div className="col-3 text-end">
        <CloseButton onClick={handleRemove} />
        <p className="fw-bold mb-0">$USD {product.price * product.qty}</p>
      </div>
      <hr />
    </div>
  );
}

export default BagCard;
