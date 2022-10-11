import Navigation from "./Navigation";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { clearBag } from "../redux/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import ReciptCard from "./ReciptCard";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function Receipt() {
  const [latestOrder, setLatestOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "get",
        baseURL: process.env.REACT_APP_API_URL,
        url: "/orders/latest",
        headers: { Authorization: "Bearer " + token },
      });

      setTimeout(() => {
        setLatestOrder(response.data);
        setLoading(false);
      }, 1500);
    };
    getData();
    dispatch(clearBag());
  }, [dispatch, token]);

  return (
    <>
      <Navigation />
      {loading && (
        <div className="mt-5">
          <ClipLoader loading={true} />
          <p className="fw-bold my-5">We are processing your order, please hold...</p>
        </div>
      )}
      {latestOrder && (
        <div className="container">
          <div>
            <h2 className="fw-bold mt-5">Order Confirmed</h2>
            <hr />
          </div>
          <div className="row">
            <div className="col-7">
              {latestOrder.products.map((product) => (
                <ReciptCard key={product.id} product={product} />
              ))}
              <button className="keepBuying-btn" onClick={() => navigate("/")}>
                keep buying
              </button>
            </div>

            <div className="col-5 text-end">
              <div>
                <h4 className="fw-bold">Order info</h4>
                <div>
                  <span className="fw-bold fs-4 text-end mb-2"> Order Total: </span>
                  <span className="fw-bold fs-4 text-end mb-2">$USD {latestOrder.total}</span>
                  <p></p>
                </div>
                <div>
                  <span className="fw-bold fs-6 text-end "> Order id: </span>
                  <span className=" fs-6 text-end ">{latestOrder.id}</span>
                </div>
                <div>
                  <span className="fw-bold fs-6 text-end "> Order Status: </span>
                  <span className=" fs-6 text-end ">{latestOrder.status}</span>
                </div>
              </div>
              <hr />
              <div>
                <h4 className="fw-bold">Delivery info</h4>
                <div>
                  <span className="fw-bold fs-6 text-end"> Customer Name: </span>
                  <span className=" fs-6 text-end">
                    {latestOrder.firstname} {latestOrder.lastname}
                  </span>
                </div>
                <div>
                  <span className="fw-bold fs-6 text-end"> Customer phone: </span>
                  <span className=" fs-6 text-end">{latestOrder.phonenumber}</span>
                </div>
                <div>
                  <span className="fw-bold fs-6 text-start"> Delivery Adress: </span>
                  <span className=" fs-6 text-end">{latestOrder.deliveryAddress}</span>
                </div>
                <div>
                  <span className="fw-bold fs-6 text-end"> State: </span>
                  <span className=" fs-6 text-end">{latestOrder.state}</span>
                </div>
                <div>
                  <span className="fw-bold fs-6 text-end"> City: </span>
                  <span className=" fs-6 text-end">{latestOrder.city}</span>
                </div>
                <div>
                  <span className="fw-bold fs-6 text-end"> Zip Code: </span>
                  <span className=" fs-6 text-end">{latestOrder.zipCode}</span>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <hr />
        </div>
      )}
      <Footer />
    </>
  );
}

export default Receipt;
