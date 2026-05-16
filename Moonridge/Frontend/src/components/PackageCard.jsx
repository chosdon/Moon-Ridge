import { useNavigate } from "react-router-dom";
import "../styles/packages.css";

function PackageCard({ pkg }) {
  const navigate = useNavigate(); 

  return (
    <div className="package-card">
      {/* Use pkg.image instead of pkg.images[0] */}
      <img src={pkg.images[0]} alt={pkg.title} />

      <div className="package-content">
        {/* Use pkg.title instead of pkg.name */}
        <h3>{pkg.title}</h3>


        
        <div className="package-bottom">
          {/* Use pkg.price instead of pkg.priceRegular */}
          <span className="price">From {pkg.price}</span>

          <button
            className="explore-btn"
            onClick={() => navigate(`/packages/${pkg.id}`)}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;