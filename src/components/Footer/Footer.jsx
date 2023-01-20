import React,{useEffect} from "react";
import "./Footer.css";
import "./Footer.scss";
import video2 from "../../Assets/bg-4.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";


import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
  //react hook  to scroll animation

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])




  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="bg-4/mp4"></video>
      </div>

      <div className="setContent container ">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Shoping with us</h2>
          </div>

          <div className="inputDiv">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address." />
            <button date-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                Travel.
                <MdTravelExplore className="icon" />
              </a>
            </div>

            <div  data-aos="fade-up" className="footerParagraph">
              9 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam culpa eveniet iusto unde hic quod voluptates vitae
              suscipit magnam. Velit porro inventore accusantium nesciunt! Vel
              accusamus tempore exercitationem minus! Placeat.
            </div>

            <div  data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* group one  */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Insurence
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

             {/* group two  */}
             <div  data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Hostelword
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

             {/* group three  */}
             <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">LAST MINUTES</span>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Insurence
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            

            <div className="footerDiv flex">
              <small>BEST ONLINE WEBSITE</small>
              <small>COPYRIGHT RESERVED -2023</small>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
