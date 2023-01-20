import React,{useState} from "react";
import "./Navbar.css";
import "./Navbar.scss";
import{GiClothes} from  'react-icons/gi';
import{AiFillCloseCircle} from 'react-icons/ai';
import{TbGridDots} from 'react-icons/tb';



const Navbar = () => {
  const[active ,setActive] = useState('navBar')

  //function to toggle navBar
  const showNav = ()=>{
      setActive('navBar activeNavbar')
  }
 //function to remove nanBar 
 // comments
 const removeNavbar = ()=>{
  setActive('navBar')
}

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1> <GiClothes className='icon'/> Fashion.</h1>
          </a>
        </div>

        <div className= {active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>

          
          </ul>

          <div  onClick={removeNavbar} className="closeNavbar">
             <AiFillCloseCircle className="icon" />
          </div>

        </div>

        <div  onClick={showNav} className="toggleNavbar">
           <TbGridDots  className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
