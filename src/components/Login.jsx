import Navigation from "./Navigation";
import Footer from "./Footer";
import { Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeCredentials } from "../redux/customerSlice";
import { useNavigate, Link } from "react-router-dom";
import sumersible from "../Images/Carousel/Sumersible_Carousel/Panerai-Submersible-Bronzo-Blu-Abisso-PAM01074.008.jpg";
import { useEffect } from "react";
import PopOverCuscomer from "./PopOverCuscomer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        baseURL: process.env.REACT_APP_API_URL,
        url: "/customer-login",
        data: { email, password },
      });
      dispatch(storeCredentials({ token: response.data.token, email: response.data.email }));
      navigate(-1);
    } catch (err) {
      if (err.response.status === 401) setErrorMessage("Wrong credentials");
      else setErrorMessage("Something went wrong, please try again");
    }
  };

  return (
    <>
      <Navigation />

      <div className="container">
        <div className="row my-5">
          <h3 className="my-4 fw-bold text-start">Login</h3>
          <PopOverCuscomer />
          <hr className="mt-3" />
          <div className="col-12 col-lg-6 text-start mt-5">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 ">
                <Form.Label className="title imput-lable">EMAIL</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="title imput-lable">PASSWORD</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <button className="add-bag" type="submit">
                LOGIN
              </button>
              <hr />
              <p className="fw-bold my-4 text-decoration-underline">
                Don't have and account yet? Register here
              </p>
              <Link to="/register" className="add-bag">
                Register
              </Link>
            </Form>
          </div>
          <div className="col-12 col-lg-6 text-start mt-3">
            <img src={sumersible} alt="sumersible" className="img-fluid" />
          </div>
        </div>
      </div>
      {errorMessage && <p style={{ color: "red" }}>**{errorMessage}**</p>}

      <Footer />
    </>
  );
}

export default Login;
