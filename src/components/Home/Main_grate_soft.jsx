import React from 'react'
import img1 from "../../../src/Image/way1.png"
import img2 from "../../../src/Image/way2.png"
import img3 from "../../../src/Image/way3.png"
import Min_grate_soft from './Min_grate_soft'

const Main_grate_soft = () => {
    const content = [{
        img1 : img1, 
        heading : "Build the right team to scale" , 
        p1 : "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
        p2: "Our delivery model helps you cut costs and deliver within budget.",
        p3: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
        bg:"graybg"
    } ,{
        img1 : img2, 
        heading : "Build the right team to scale" , 
        p1 : "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
        p2: "Our delivery model helps you cut costs and deliver within budget.",
        p3: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
        bg:"graybg"
    } , {
        img1 : img3, 
        heading : "Build the right team to scale" , 
        p1 : "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
        p2: "Our delivery model helps you cut costs and deliver within budget.",
        p3: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
        bg:"graybg"
    }]
  return (
    <>
    <div className='flex flex-col items-center bg-gray-50 py-4 '>
            <div className='text-xl flex flex-col space-y-2 items-center my-4'>
                <span className='block  w-12 h-1 bg-blue-700'/>
                <p >Way of building </p>
                <h3 className='font-semibold'>Greate Software</h3>
            </div>
            <div>
                    {
                        content.map((item , idx)=>{
                            return(
                                <Min_grate_soft isRev = {idx%2} item={item}/>
                            )
                        })
                    }
         </div>
    </div>
    </>
  )
}

export default Main_grate_soft;