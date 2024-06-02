/* eslint-disable react/no-unknown-property */

import Workflow from "./Components/Workflow";
import Feature from "./Components/Feature";
import Header from "./Components/Header";
import Herosection from "./Components/Herosection";
import Pricing from "./Components/Pricing";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <>
      <div className="min-w:full min-h-screen ">
      <Header />
      <Herosection />
         <Feature />
      <Workflow />
      <Pricing />
      <Testimonial />
      <Footer />
      </div>


    
    </>
  );
};

export default App;
