import React from 'react'
import Image from "next/image";
import img1 from "../../../public/assets/images/evdtcompo/Casestudy/Iphone 13 - Noir.png";
import img2 from "../../../public/assets/images/evdtcompo/Casestudy/img1.svg";
import img3 from "../../../public/assets/images/evdtcompo/Casestudy/img2.svg";



const Casestudies = () => {
  return (
    <div className="Case-studies-section">
    <div className='container '>
        <div className="row justify-content-center mb-50"> 
        <div className="col-lg-10">
        <div className='section-title-case-studies text-center'>

         <h4>Case Studies</h4>           
         <h1>Veda Academy: Web | <br/> Mobile Android and iOS</h1>
          </div>
         
          </div>
        </div>





      <div className='case-study-one'>

        <div className="col-xxl-4 col-xl-4  col-lg-4 col-md-4  col-sm-10">
            <div className='challenges'>
                  <Image src={img2} alt='casestudy2'/>
                  <h1>
                  Challenges
                  </h1>
                  <p>
                  Veda Academy faced the challenge of catering to diverse learning needs in a traditional classroom setting, leading to varying levels of student engagement and performance. 
                  </p>
            </div>
          </div>



          <div className="col-xxl-4 col-xl-4  col-lg-4 col-md-4  col-sm-10">
            <div className="case-study-section-one">
            
                <Image src={img1} alt='casestudy1'/>
              </div>
       
          </div>



          <div className="col-xxl-4 col-xl-4  col-lg-4 col-md-4  col-sm-10 " >
            <div className='implement'>
                  <Image src={img3} alt='casestudy3'/>
                  <h1>
                  Implementation of EVD
                  </h1>
                  <p>
                  The introduction of EVD brought a transformative shift by offering personalized learning experiences. Adaptive learning platforms tailored content to individual student needs, addressing weaknesses and building on strengths.
                  </p>
            </div>
          </div>
      </div>


      <div className="col-xxl-12 col-xl-12  col-lg-12 col-md-10">
      <div className='result'>
             
                  <h1>
                 Results:
                  </h1>
                  <p>
                  The implementation resulted in a remarkable improvement in student performance. The personalized approach enhanced engagement and understanding, fostering a positive learning environment. Parental satisfaction soared as they witnessed the tangible academic progress of their children.
                  </p>
            </div>
      </div>


    </div>
    </div>
  )
}

export default Casestudies