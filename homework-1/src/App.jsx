import Navbar from "./components/Navbar";
import Section_first from "./components/Section_first";
import Section_second from "./components/Section_second";
import Section_third from "./components/Section_third";
import Section_fourth from "./components/Section_fourth";
import Section_fifth from "./components/Section_fifth";
import Section_sixth from "./components/Section_sixth";
import Footer from "./components/Footer"
import rasm1 from "./assets/images/image1.png";
import rasm2 from "./assets/images/image2.png";
import rasm3 from "./assets/images/image5.png";
import rasm4 from "./assets/images/image4.png";
import rasm5 from "./assets/images/image7.png";
import rasm6 from "./assets/images/image3.png";
import rasm7 from "./assets/images/image6.png";
import rasm8 from "./assets/images/image8.png";
import rasm9 from "./assets/images/person1.png";
import rasm10 from "./assets/images/person2.png";
import rasm11 from "./assets/images/circle.png";
import rasm12 from "./assets/images/circle.png";
import rasm13 from "./assets/images/circle.png";
import rasm14 from "./assets/images/person3.png";
import rasm15 from "./assets/images/person4.png";
import rasm16 from "./assets/images/image9.png";
import rasm17 from "./assets/images/person5.png";
import rasm18 from "./assets/images/image10.png";
import rasm19 from "./assets/images/image1.png";

const App=()=>{
  return (
    <>
    <header>
      <div className="header_container">
        <img src={rasm1} alt="logo" className="logo"/>
      <Navbar/>
      </div>
    </header>
    <main>
      <div className="main_container">
       <Section_first/>
       <img src={rasm2} alt="image" className="section_first_image_first"/>
       <img src={rasm3} alt="image" className="section_first_image_second"/>
       <img src={rasm4} alt="image" className="section_first_image_third"/>
       <img src={rasm5} alt="image" className="section_first_image_fourth"/>
       <img src={rasm6} alt="image" className="section_first_image_fifth"/>
       <img src={rasm7} alt="image" className="section_first_image_sixth"/>
       <img src={rasm8} alt="image" className="section_first_image_seventh"/>
       <Section_second/>
       <img src={rasm9} alt="person_image" className="section_second_card_first_image"/>
       <img src={rasm10} alt="" className="section_second_card_second_image"/>
       <Section_third/>
       <img src={rasm11} alt="circle_image" className="section_third_wrap_first_image"/>
       <img src={rasm12} alt="circle_image" className="section_third_wrap_second_image"/>
       <img src={rasm13} alt="circle_image" className="section_third_wrap_third_image"/>
       <Section_fourth/>
       <img src={rasm14} alt="person_image" className="section_fourth_wrap_second_image"/>
       <img src={rasm15} alt="person_image" className="section_fourth_wrap_third_image"/>
       <Section_fifth/>
       <img src={rasm16} alt="image" className="section_fifth_wrap_image_first"/>
       <img src={rasm17} alt="image" className="section_fifth_wrap_image_second"/>
       <img src={rasm18} alt="image" className="section_fifth_wrap_image_third"/>
       <Section_sixth/>
       
      </div>
  </main>
  <footer>
    <div className="footer_container">
    <Footer/>
    <img src={rasm19} alt="logo" className="footer_wrap_first_image"/>
    </div>
  </footer>
    
    
    </>
  );
};

export default App;