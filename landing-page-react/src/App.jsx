/* eslint-disable react/no-unknown-property */

import Workflow from "./Components/Workflow";
import Feature from "./Components/Feature";
import Header from "./Components/Header";
import Herosection from "./Components/Herosection";
import VideoSection from "./Components/VideoSection";

const App = () => {
  return (
    <>
      <div className="min-w:full min-h-screen ">
      <Header />
      <Herosection />
        <VideoSection />
         <Feature />
      <Workflow />
      </div>


    
    </>
  );
};

export default App;
