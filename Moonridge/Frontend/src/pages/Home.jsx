// src/pages/Home.js

import HeroSlider from "../components/HeroSlider";
import PackageSection from "../components/PackageSection";

import { PACKAGES, CATEGORY } from "../data/packages";

function Home() {
  // Filter by category
  const bikePackages = PACKAGES.filter(pkg => pkg.category === CATEGORY.BIKE);
  const tourPackages = PACKAGES.filter(pkg => pkg.category === CATEGORY.TOUR);

  // Optional: show only featured packages for homepage preview
  const featuredBike = bikePackages.filter(pkg => pkg.featured).slice(0, 3);
  const featuredTour = tourPackages.filter(pkg => pkg.featured).slice(0, 3);

  return (
    <>
      <HeroSlider />

      <PackageSection
  title="Best Ladakh Tour Packages "
  subtitle="Ride through the world's highest passes and experience the thrill of Ladakh like never before."
  packages={featuredBike}
/>

<PackageSection
  title="Explore Our Tour Packages "
  subtitle="Carefully curated travel experiences for mountains, beaches, and beyond."
  packages={featuredTour}
/>
    </>
  );
}

export default Home;