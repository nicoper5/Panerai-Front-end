import Navigation from "./Navigation";
import Footer from "./Footer";
import Form from "react-bootstrap/Form";
import "../css/register.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "/register",
        data: {
          firstname,
          lastname,
          email,
          password,
          address,
          phonenumber,
        },
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/login");
    } catch (err) {
      if (err.response.status === 401) setErrorMessage("Wrong credentials");
      else setErrorMessage("Something went wrong, please try again");
    }
  };

  return (
    <>
      <Navigation />
      <Form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row mt-5 mb-5">
            <p className="grey-color text-start mb-5 fw-bold title">
              By creating an account with our store, you will be able to move through the checkout
              process faster, store multiple shipping addresses, view and track your orders in your
              account and more.
            </p>

            <div className="col-6 col-lg-3 grey-color">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="49px">
                <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm368-48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48z" />
              </svg>
              <p className="mt-4 fw-bold">FREE GROUND SHIPPING</p>
            </div>
            <div className="col-6 col-lg-3 grey-color">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="38px">
                <path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z" />
              </svg>
              <p className="mt-4 fw-bold">EASY RETURNS</p>
            </div>
            <div className="col-6 col-lg-3 grey-color">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="35px">
                <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80s80-35.8 80-80zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" />
              </svg>
              <p className="mt-3 fw-bold">OFFICIAL WARRANTY</p>
            </div>
            <div className="col-6 col-lg-3 grey-color">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="43px">
                <path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" />
              </svg>
              <p className="mt-4 fw-bold">SECURE PAYMENT</p>
            </div>
          </div>
          <div className="row">
            <h3 className="mt-4 text-start title ">Personal Info </h3>
            <hr />
            <div className="col-12 col-lg-6  mt-3 mb-5 text-start">
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label className="title imput-lable">FIRST NAME</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="First name"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label className="title imput-lable">LAST NAME</Form.Label>
                <Form.Control
                  type="text"
                  value={lastname}
                  required
                  placeholder="Last name"
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="title imput-lable">E-MAIL</Form.Label>
                <Form.Control
                  type="email imput-lable"
                  placeholder="Email adress"
                  value={email}
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
            </div>

            <div className="col-12 col-lg-6 mt-3 mb-5 text-start">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="title imput-lable">PASSWORD</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAdress">
                <Form.Label className="title imput-lable">ADDRESS</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  value={address}
                  required
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label className="title imput-lable">MOBILE NUMBER</Form.Label>
                <Form.Control
                  type="numbers"
                  placeholder="Mobile number"
                  required
                  velue={phonenumber}
                  onChange={(e) => {
                    setPhonenumber(e.target.value);
                  }}
                />
              </Form.Group>
              <button className="add-bag" type="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        {errorMessage && <p style={{ color: "red" }}>**{errorMessage}**</p>}
      </Form>
      <Footer />
    </>
  );
}

export default Register;
