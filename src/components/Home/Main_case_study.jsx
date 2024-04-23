import React from 'react'
import Slider from './Slider'
import img1 from "../../../src/Image/Case-study__image.png"
import img2 from "../../../src/Image/Case-study__image2.png"
import img3 from "../../../src/Image/Case-study__image 3.png"

const Main_case_study = () => {
    const content = [{
        img : img1, 
        heading : "Website Design for SCFC Canada" , 
        desc : "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
        bg:"graybg"
    } ,{
        img : img2, 
        heading : "Website Design for SCFC Canada" , 
        desc : "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
        bg:"greenbg"
    } , {
        img : img3, 
        heading : "Website Design for SCFC Canada" , 
        desc : "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry." ,
        bg : "pinkbg"
    }]
  return (
    <>
    <div className='flex flex-col items-center my-4 bg-gray-50 py-4 border'>
            <div className='text-xl flex flex-col space-y-2 items-center my-4'>
                <span className='block  w-12 h-1 bg-blue-700'/>
                <p >Our Recent</p>
                <h3 className='font-semibold'>Case Studies</h3>
            </div>
            <div>
                    {
                        content.map((item)=>{
                            return(
                                <Slider item={item}/>
                            )
                        })
                    }
         </div>
    </div>
    </>
  )
}
export default Main_case_study