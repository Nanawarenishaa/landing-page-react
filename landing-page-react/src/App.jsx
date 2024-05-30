/* eslint-disable react/no-unknown-property */
import Header from "./Components/Header";
import Herosection from "./Components/Herosection";
import VideoSection from "./Components/VideoSection";

const App = () => {
  return (
    <>
      <div className="mainPage">
      <Header />
      <Herosection />
        <VideoSection />
         
      </div>


    
    </>
  );
};

export default App;
