import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import luminor from "../Images/Carousel/Luminor_Carousel/Pam1661-stock.jpg";
import { useEffect } from "react";

function OutOfScope() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row my-5">
          <div className=" my-5">
            <h2 className="fw-bold fs-1 mb-5">
              This functionality is outside the scope of the project
            </h2>
            <Link to="/about-this-project" className="add-bag mt-5">
              Learn more
            </Link>
          </div>
          <div>
            <img src={luminor} alt="Luminor watch" className="img-fluid" />
          </div>
          <hr />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OutOfScope;
