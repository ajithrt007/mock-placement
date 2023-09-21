'use client'

// import { useEffect, useState } from 'react'
// import InputBox from '@/components/InputBox'
// import DropDownSearch from '@/components/DropDownSearch.component'
// import Button from '@/components/Button.component'
// import { collegeList, branches, yearofjoining, currentyear } from '../../../public/formOptionData'
// import CheckBoxes from '@/components/CheckBoxes'
// import { participants,mech,cse,bio,ec } from '../../../public/whatsappGroupLink'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// 

export default function RegisterPage(){

    return(
        <>
            <div className='items-center bg-[#F1F1F1] p-5 flex w-full justify-center'>

                <div className='flex flex-col gap-10 w-full items-center py-5'>
                    <div className="flex items-center gap-5">
                        <Link href="/" className="rounded-full bg-[#EDBB0A] p-3 flex items-center justify-center"><FontAwesomeIcon icon={faArrowLeft} className='h-[20px]'/></Link>
                        <div className="flex py-4">
                            <h1 className=" font-extrabold text-2xl whitespace-nowrap">
                            Register For&nbsp;
                            </h1>
                            <p className="text-[#EDBB0A] font-extrabold text-2xl whitespace-nowrap">
                            Free Now!!
                            </p>
                        </div>
                    </div>
                
                    <table>
                        <tr className='even:bg-white odd:bg-[#E9E9E9]'>
                            <th className='p-5 text-left'>Features</th>
                            <th className='p-5 text-left'>
                                <h1>Track 1</h1>
                                <p className='font-light text-sm '>Open to All</p>
                            </th>
                            <th className='p-5 text-left'>
                                <h1>Track 2</h1>
                                <p className='font-light text-sm '>Exclusively for 3rd and 4th years</p>
                            </th>
                        </tr>
                        <tr className='even:bg-white odd:bg-[#E9E9E9]'>
                            <td className='p-5'>Talk Sessions</td>
                            <td className='p-5 text-center'><FontAwesomeIcon icon={faCheck}  className='h-[20px]'/></td>
                            <td className='p-5 text-center'><FontAwesomeIcon icon={faCheck}  className='h-[20px]'/></td>
                        </tr>
                        <tr className='even:bg-white odd:bg-[#E9E9E9]'>
                            <td className='p-5'>Panel Discussion</td>
                            <td className='p-5 text-center'><FontAwesomeIcon icon={faCheck}  className='h-[20px]'/></td>
                            <td className='p-5 text-center'><FontAwesomeIcon icon={faCheck}  className='h-[20px]'/></td>
                        </tr>
                        <tr className='even:bg-white odd:bg-[#E9E9E9]'>
                            <td className='p-5'>
                                <h1>Mock Placement Drive</h1>
                                <p>Including 3 rounds - Aptitude, Technical Interview and HR Interview</p>    
                            </td>
                            <td className='p-5 text-center'><FontAwesomeIcon icon={faXmark}  className='h-[20px]'/></td>
                            <td className='p-5 text-center'><FontAwesomeIcon icon={faCheck}  className='h-[20px]'/></td>
                        </tr>
                        <tr className='even:bg-white odd:bg-[#E9E9E9]'>
                            <td className='p-5'>Register (Free Registration)</td>
                            <td className='py-5 text-center'><a href="https://forms.gle/Qq4xmpeKJRZFjnxB8" className="py-2 px-3 rounded-[10px] bg-[#EDBB0A] tracking-wide" target="_blank" rel="noopener noreferrer">Track 1</a></td>
                            <td className='py-5 text-center'><a href="https://forms.gle/e8Kb2VaFjFTKU6f68" className="py-2 px-3 rounded-[10px] bg-[#EDBB0A] tracking-wide" target="_blank" rel="noopener noreferrer">Track 2</a></td>
                        </tr>
                    </table>
    
                </div>

            </div>
        </>
    )
}