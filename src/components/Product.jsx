import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProductCarousel from "./ProductCarousel";
import "../css/product.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBag } from "../redux/customerSlice";

export default function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const [wantedProduct, setWantedProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "get",
        url: process.env.REACT_APP_API_URL + "/products/" + params.slug,
      });

      setWantedProduct(response.data);
    };
    getProduct();
  }, [params]);

  const handleAdd = () => {
    dispatch(addToBag(wantedProduct));
  };

  return (
    wantedProduct && (
      <>
        <Navigation />
        <section>
          <div className="container-fluid">
            <div className="row  ">
              <div className="col-12 col-lg-8 p-0 ">
                <ProductCarousel image={wantedProduct.image} imageBack={wantedProduct.imageBack} />
              </div>
              <div className="col-12 col-lg-4 p-0 ">
                <div className="m-5">
                  <h3 className="fw-bold text-start">{wantedProduct.name}</h3>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="fw-bold fs-4 mb-0">$USD {wantedProduct.price}</p>
                      <p>Excl. Sales Tax</p>
                    </div>
                    <button id="add-bag" onClick={handleAdd}>
                      ADD TO BAG
                    </button>
                  </div>
                  <hr />
                  <div className="text-start fw-bold mt-5">
                    <ul className="decoration">
                      <li id="li-one" className="mb-5">
                        Technical Details
                      </li>
                      <li id="li-two" className="mb-5">
                        Contact Concierge
                      </li>
                      <li id="li-three" className="mb-5">
                        Make an Appointment
                      </li>
                      <li id="li-four" className="mb-5">
                        Sales info
                      </li>
                      <li id="li-five" className="mb-5">
                        Product Warranty
                      </li>
                      <li id="li-six" className="mb-2">
                        Download Instruction
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 col-lg-8 p-0 text-start mt-5">
                <h5 className="ms-5">TECHNICAL DETAILS</h5>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h6 className="fw-bold ms-5">MOVEMENT</h6>
                    <p className="ms-5">{wantedProduct.description.movement}</p>
                    <h6 className="fw-bold ms-5">FUNCTIONS</h6>
                    <p className="ms-5">{wantedProduct.description.functions}</p>
                    <h6 className="fw-bold ms-5">CASE</h6>
                    <p className="ms-5">{wantedProduct.description.case}</p>
                    <h6 className="fw-bold ms-5">BEZEL</h6>
                    <p className="ms-5">{wantedProduct.description.bezel}</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <h6 className="fw-bold ms-5">BACK</h6>
                    <p className="ms-5">{wantedProduct.description.back}</p>
                    <h6 className="fw-bold ms-5">DIAL</h6>
                    <p className="ms-5">{wantedProduct.description.dial}</p>
                    <h6 className="fw-bold ms-5">WATER RESISTANCE</h6>
                    <p className="ms-5">{wantedProduct.description.waterResistance}</p>
                    <h6 className="fw-bold ms-5">STRAP</h6>
                    <p className="ms-5">{wantedProduct.description.strap}</p>
                  </div>
                </div>
                <p className="ms-5">
                  * Please note that images are stock photographs and that colors and sizes may not
                  exactly correspond to actual products.
                </p>
              </div>
              <div className="col-12 col-lg-4 p-0 background-gradiant ">
                <img
                  className="img-fluid product-img"
                  src={process.env.REACT_APP_STORAGE_URL + wantedProduct.image}
                  alt="Product"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  );
}
