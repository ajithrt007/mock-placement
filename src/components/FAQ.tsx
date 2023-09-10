import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function FAQ(props:{question:string,answer:string}){
    const [display,setDisplay] = useState('none');
    const [angle,setAngle] = useState('rotate(0deg)')
    const rowStyle = {
        display: display,
    };
    const arrowStyle = {
        transform: angle,
        opacity: 0.7
    }
    function buttonClick(){
        if (display === 'none'){
            setDisplay('flex')
            setAngle('rotate(45deg)')
        }
        else{
            setDisplay('none')
            setAngle('rotate(0deg)')
        }
    }
    return(
        <div className='bg-[#E9E9E9] p-4 rounded-xl flex flex-col gap-4 w-full cursor-pointer' onClick={buttonClick}>
            <div className='flex justify-between relative'>
                <p className="font-medium text-lg">{props.question}</p>
                {/* <img src="/arrow.svg" alt="" style={arrowStyle} height={20} width={20}/> */}
                <FontAwesomeIcon icon={faPlus} className='h-[20px]' style={arrowStyle}/>
            </div>
            <div className='flex flex-col gap-7' style={rowStyle}>
                <div className='flex justify-center'>
                    <p className='text-sm tracking-wide'>{props.answer}</p>
                </div>
            </div>  
        </div>
    )
}