import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Recommended from "../components/Recommended";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Testimonial />
      <Recommended />
      <Footer />
    </div>
  );
};

export default HomePage;
