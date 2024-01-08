import Footer from "../components/Footer";
import Header from "../components/Header";
import Recommended from "../components/Recommended";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Navbar from "../components/Navbar";
import CatalogDelivery from "../components/CatalogDelivery";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Testimonial />
      <CatalogDelivery />
      <Recommended />
      <Footer />
    </>
  );
}
