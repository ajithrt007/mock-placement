import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function FeatureSquare(props:{icon:string,heading:string,content:string}){

    AOS.init();
  useEffect(() => {
    AOS.init();
  }, [])


    return(
        <div className='bg-[#E9E9E9] p-7 rounded-md sm:w-[25%] aspect-square hover:bg-[#D9D9D9]' data-aos="flip-up">
            <div className='w-full flex justify-start mb-[15%]'>
                <img src={props.icon} alt="" className='h-[70px]'/>
            </div>
            <h1 className='font-bold text-lg'>{props.heading}</h1>
            <p className='tracking-wide text-sm'>{props.content}</p>
        </div>
    )
}