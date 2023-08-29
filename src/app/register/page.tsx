'use client'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import BasicForm from '@/components/BasicForm.component'
import { useState } from 'react'
import MockForm from '@/components/MockForm.component'

export default function RegisterPage(){

    type formData = {
        name:string,
        num:string,
        email:string,
        memid:string,
        college:string,
        branch:string,
        yearJoin:string,
        cyear:string,
        referal:string,
        resumeLink:string,
        choice1:string,
        choice2:string,
        confirmation:string
    }
    // var formD:formData = {

    // };

    // const[form,setForm] = useState(formD)

    // const getFormData = (form) => {

    // }

    const[stage,setStage] = useState("1")
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const changeStage = (currentyear:string) => {
        if(Number(currentyear) > 2){
            setStage("2")
        }
        else
            setStage("3")
    }

    return(
        <div className=''>
            <div className='w-[100vw] bg-[#1E1E1E] flex px-5 justify-between fixed top-0 items-center h-[70px] z-20'>
                <img src="/mockplacement-yellow.svg" alt="" className='h-[25px]'/>
                    <div className='text-white flex gap-5'>
                        <a href='#'>About</a>
                        <a href='#'>Events</a>
                        <Link href="/mockplacement">Mock Placement</Link>
                        <a href='#'>Calander</a>
                        <Link href="/leaderboard">Leaderboard</Link>
                        <Link href="/register">Register</Link>
                        <a href='#'>Contact</a>
                        <button className='hidden'>
                            <FontAwesomeIcon icon={faBars} className='h-[20px]'/>
                        </button>                       
                    </div>
            </div>
            <div className='items-center mt-[70px] bg-[#F1F1F1] p-5 flex w-full justify-center'>
                {stage === "1"? <BasicForm stageChange={changeStage}/>:null} /basic form
                {stage === "2"? <MockForm/>:null} /for year greater than 2 resume collection
                {stage === "3"} /final whatsapp link page for year greater than 2
                {stage === "4"} /final whatsapp link page for year less than 3
            </div>            
            <div className='flex justify-center items-center bottom-0 bg-[#D9D9D9] w-full p-3 text-sm'>Queries? Contact <a href="mailto:mockplacement2023@gmail.com">mockplacement2023@gmail.com</a></div>
        </div>
    )
}