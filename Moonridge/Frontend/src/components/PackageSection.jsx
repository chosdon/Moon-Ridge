import { Link } from "react-router-dom";
import PackageCard from "./PackageCard";

function PackageSection({ title, subtitle, packages }) {
  return (
    <section className="package-section">

      {/* NEW HEADER BLOCK */}
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>

      <div className="package-container">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      <Link to="/packages">
        <button className="view-all-btn">
          View All Packages
        </button>
      </Link>

    </section>
  );
}

export default PackageSection;