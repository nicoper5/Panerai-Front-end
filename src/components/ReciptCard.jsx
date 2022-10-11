import "../css/productCheckoutBill.css";

function ReciptCard({ product }) {
  return (
    <div className="container">
      <div className="row grey-color">
        <div className="col-5 mb-4">
          <img
            className="img-fluid img-checkoutCard"
            src={process.env.REACT_APP_STORAGE_URL + product.image}
            alt="Product in Bag"
          />
        </div>
        <div className="col-7 text-start fw-bold">
          <p>{product.name}</p>
          <h6 className="fw-bold fs-4 mb-0" id="unite-price">
            UNIT PRICE
          </h6>
          <p className="fw-bold mb-0 fs-5">$USD {product.price}</p>
          <p className="fw-bold fs-5 text-black">Quantity: {product.qty}</p>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default ReciptCard;
