import Navigation from "./Navigation";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { clearCredentials } from "../redux/customerSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import OrderCard from "./OrderCard";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const email = useSelector((state) => state.email);
  const [customerOrders, setCustomerOrders] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        method: "get",
        baseURL: process.env.REACT_APP_API_URL,
        url: "/orders/by-customer",
        headers: { Authorization: "Bearer " + token },
      });

      setCustomerOrders(response.data);
    };
    getOrders();
  }, [token]);

  const handleClick = () => {
    dispatch(clearCredentials());
    navigate(-1);
  };
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row my-5">
          <h2 className="my-5 fw-bold text-center">PROFILE</h2>
          <p className="fw-bold fs-5">Loged as: {email}</p>
          <hr />
          <div className="col-12 col-lg-12 text-start mt-2 ">
            <h4>Your Orders</h4>
            {customerOrders &&
              customerOrders.map((order) => (
                <div key={order.id} className="container border p-5 my-2">
                  <div className="row">
                    <div className="col-12 col-lg-7">
                      {order.products.map((product) => (
                        <OrderCard key={product.id} product={product} />
                      ))}
                    </div>
                    <div className="col-12 col-lg-5">
                      <div>
                        <h4 className="fw-bold">Order info</h4>
                        <div>
                          <span className="fw-bold fs-4 text-end mb-2"> Order Total: </span>
                          <span className="fw-bold fs-4 text-end mb-2">$USD {order.total}</span>
                          <p></p>
                        </div>
                        <div>
                          <span className="fw-bold fs-6 text-end "> Order id: </span>
                          <span className=" fs-6 text-end ">{order.id}</span>
                        </div>
                        <div>
                          <span className="fw-bold fs-6 text-end "> Order Status: </span>
                          <span className=" fs-6 text-end ">{order.status}</span>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <h4 className="fw-bold">Delivery info</h4>
                        <div>
                          <span className="fw-bold fs-6 text-end"> Customer Name: </span>
                          <span className=" fs-6 text-end">
                            {order.firstname} {order.lastname}
                          </span>
                        </div>
                        <div>
                          <span className="fw-bold fs-6 text-end"> Customer phone: </span>
                          <span className=" fs-6 text-end">{order.phonenumber}</span>
                        </div>
                        <div>
                          <span className="fw-bold fs-6 text-start"> Delivery Adress: </span>
                          <span className=" fs-6 text-end">{order.deliveryAddress}</span>
                        </div>
                        <div>
                          <span className="fw-bold fs-6 text-end"> State: </span>
                          <span className=" fs-6 text-end">{order.state}</span>
                        </div>
                        <div>
                          <span className="fw-bold fs-6 text-end"> City: </span>
                          <span className=" fs-6 text-end">{order.city}</span>
                        </div>
                        <div>
                          <span className="fw-bold fs-6 text-end"> Zip Code: </span>
                          <span className=" fs-6 text-end">{order.zipCode}</span>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="col-12 col-lg-6 text-start mt-3">
            <button className="add-bag mt-3" type="submit" onClick={handleClick}>
              LOGOUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
