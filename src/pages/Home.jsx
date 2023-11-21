import Section1 from "../components/HomePage/Section1";
import Section2 from "../components/HomePage/Section2";
import Section3 from "../components/HomePage/Section3";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer/>
    </>
  );
}

export default Home;
