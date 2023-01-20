import React,{useEffect} from 'react';
import './Main.css';
import './Main.scss';
import{HiOutlineLocationMarker} from 'react-icons/hi';
import{ HiOutlineClipboardCheck} from 'react-icons/hi';


import img from '../../Assets/pic-1.jpg'
import img2 from '../../Assets/pic-2.jpg'
import img3 from '../../Assets/pic-3.jpg'
import img4 from '../../Assets/pic-4.jpg'
import img5 from '../../Assets/pic-5.jpg'
import img6 from '../../Assets/pic-6.jpg'
import img7 from '../../Assets/pic-3.jpg'
import img8 from '../../Assets/pic-8.jpg'
import img9 from '../../Assets/pic-9.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'




const Data = [

  {
    id:1,
    imgSrc: img,
    destTitle:  'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees:'$700',
    description: 'lorem'

  },
 
  {
    id:2,
    imgSrc: img2,
    destTitle:  'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees:'$700',
    description: 'lorem'

  },

  {
    id:3,
    imgSrc: img3,
    destTitle:  'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees:'$700',
    description: 'lorem'

  },

  {
    id:4,
    imgSrc: img4,
    destTitle:  'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees:'$700',
    description: 'lorem'

  },

  {
    id:5,
    imgSrc: img5,
    destTitle:  'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees:'$700',
    description: 'lorem'

  },

  {
    id:6,
    imgSrc: img6,
    destTitle:  'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees:'$700',
    description: 'lorem'

  },

  {
    id:7,
    imgSrc: img7,
    destTitle:  'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees:'$700',
    description: 'lorem'

  },

  {
    id:8,
    imgSrc: img8,
    destTitle:  'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees:'$700',
    description: 'lorem'

  },

  {
    id:9,
    imgSrc: img9,
    destTitle:  'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees:'$700',
    description: 'lorem'

  } 

]

const Main = () => {
  //react hook  to scroll animation

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])






  return (
    <section className="main container section">
       
       <div className="secTitle">
        <h3  data-aos="fade-right" className="title">Most visited cloths</h3>
       </div>

       <div className="secContent grid">

                 {/*   map arry to fetch each part  */ } 

        {

          Data.map(({ id , imgSrc , destTitle , location , grade , fees, description })=>{
             return(
              <div key={id} data-aos="fade-up" className="singleDestination">

                 <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                 </div>

                 <div className="cardInfo">
                 <h4 className="destTitle">{destTitle}</h4>
                 <span className="contient flex">
                     <HiOutlineLocationMarker className='icon' />
                   <span className="name">{location}</span>
                  </span> 
                 
                 <div className="fees flex">
                    <div className="grade">
                         <span>{grade}<small>+1</small></span>
                    </div>

                 

                     <div className="price">
                         <h5>{fees}</h5>
                     </div>
                </div> 

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'  />
                  </button>

                 
                 </div>

              </div>
             )  
          
          })

        }
 
       </div>

    </section>
  );
}

export default Main
