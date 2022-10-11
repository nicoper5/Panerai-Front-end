import orange from "../Images/Carousel/Sumersible_Carousel/Submersible_Orange.jpeg";
import "../css/InfoCard.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function InfoCardW() {
  const navigate = useNavigate();
  return (
    <div id="card-white">
      <div id="img-watch">
        <Link to="/collection/submersible">
          <img src={orange} alt="" className="img-fluid" />
        </Link>
      </div>
      <div id="orange" className="submersible">
        <div>
          <h6 className="fw-bold mb-4 model-info">SUBMERSIBLE</h6>
          <button
            className="discover-more-btn-white"
            onClick={() => navigate("/collection/submersible")}
          >
            DISCOVER MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoCardW;
