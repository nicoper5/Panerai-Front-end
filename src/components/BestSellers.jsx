import ProductCard from "./ProductCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../css/bestSeller.css";

export default function BestSellers() {
  const [bestsellers, setBestsellers] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "get",
        baseURL: process.env.REACT_APP_API_URL,
        url: "/products",
        params: { bestsellers: true },
      });

      setBestsellers(response.data);
    };
    getData();
  }, []);
  return (
    <div className="container bestseller-container">
      <h6 className="text-start bestsellers fw-bold">FEATURED</h6>
      <div className="row relojes">
        {bestsellers &&
          bestsellers.map((product) => (
            <div key={product.id} className="col-12 col-lg-3 pointer" id="watch-cards">
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
}
