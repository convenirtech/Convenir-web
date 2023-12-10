import Footer from "../components/Footer";
import Header from "../components/Header";
import Recommended from "../components/Recommended";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Services />
      <Testimonial />
      <Recommended />
      <Footer />
    </div>
  );
}
