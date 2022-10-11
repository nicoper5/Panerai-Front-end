import luna from "../Images/Carousel/Luminor_Carousel/Luna_Rossa.jpeg";
import "../css/InfoCard.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function InfoCardB() {
  const navigate = useNavigate();
  return (
    <div id="card-black">
      <div id="luna-rosa" className="align-items-center">
        <h6 className="fw-bold  text-white mb-4 model-info">ABOUT THIS PROJECT</h6>
        <button
          className="text-white discover-more-btn"
          onClick={() => navigate("/about-this-project")}
        >
          DISCOVER MORE
        </button>
      </div>
      <div id="img-watch">
        <Link to="/about-this-project">
          <img src={luna} alt="" className="img-fluid" />
        </Link>
      </div>
    </div>
  );
}

export default InfoCardB;
