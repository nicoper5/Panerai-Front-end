import Footer from "./Footer";
import Navigation from "./Navigation";
import "../css/collection.css";
import radmir from "../Images/product/footer/radiomir copy.jpg.transform.default.webp";
import luminor from "../Images/product/footer/luminorcopy.jpg.transform.default.webp";
import submersible from "../Images/product/footer/submersible copy.jpg.transform.default.webp";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Collections() {
  const params = useParams();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getCollection = async () => {
      const response = await axios({
        method: "get",
        url: process.env.REACT_APP_API_URL + "/collections/" + params.slug,
      });

      setCollection(response.data);
    };
    getCollection();
    window.scrollTo(0, 0);
  }, [params]);
  return (
    collection && (
      <>
        <Navigation />
        <section>
          <div>
            <img
              src={process.env.REACT_APP_STORAGE_URL + collection.img}
              className="img-fluid"
              alt="Radomir Collection"
            />
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              {collection &&
                collection.products.map((product) => (
                  <div key={product._id} className="col-md-3 cardColor" id="watch-cards">
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section>
          <div id="collection-img">
            <Link to="/collection/radiomir">
              <div>
                <img src={radmir} alt="Radomir Collection" className="img-fluid width-responsive" />
              </div>
            </Link>
            <Link to="/collection/luminor">
              <div>
                <img
                  src={luminor}
                  alt="Luminor Collection"
                  className="img-fluid width-responsive"
                />
              </div>
            </Link>
            <Link to="/collection/submersible">
              <div>
                <img
                  src={submersible}
                  alt="Submersible Collection"
                  className="img-fluid width-responsive"
                />
              </div>
            </Link>
          </div>
        </section>
        <Footer />
      </>
    )
  );
}

export default Collections;
