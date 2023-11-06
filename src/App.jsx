import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Recommended from "./components/Recommended";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Testimonial />
      <Recommended />
      <Footer />
    </>
  );
}

export default App;
