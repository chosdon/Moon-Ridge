// src/pages/Packages.js

import PackageCard from "../components/PackageCard";
import { PACKAGES } from "../data/packages"; // ✅ merged dataset

function Packages() {
  return (
    <div className="package-section">
      <h2 className="section-title">All Packages</h2>

      <div className="package-container">
        {PACKAGES.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} /> // ✅ use pkg.id as key
        ))}
      </div>
    </div>
  );
}

export default Packages;