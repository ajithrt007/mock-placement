'use client'
// import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import LabelTextBox from '@/components/LabelTextBox.component'
import Button from '@/components/Button.component'
import DropDownSearch from '@/components/DropDownSearch.component'
import { collegeList } from '../../../public/formOptionData'
import { branches } from '../../../public/formOptionData'

export default function RegisterPage(){
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return(
        <div className=''>
            <div className='w-[100vw] bg-[#1E1E1E] flex px-5 justify-between fixed top-0 items-center h-[70px] z-20'>
                <img src="/mockplacement-yellow.svg" alt="" className='h-[25px]'/>
                    {/* <Image
                    src="/mockplacement-yellow.svg"
                    fill
                    alt="Mock Placement"
                    priority={true}
                    /> */}
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
            <form action="" onSubmit={handleSubmit}>
                <div className='flex flex-col gap-10 items-center mt-[70px] bg-[#F1F1F1] p-5'>                
                    <div className='bg-white p-5 flex flex-col gap-5 rounded-[15px]'>                    
                        <LabelTextBox label="Name" placeholdertext="Name" inputtype="text" minVal="" maxVal="" requiredVal={true} />
                        <LabelTextBox label="Phone Number" placeholdertext="Phone Number" inputtype="pnumber" minVal="" maxVal="" requiredVal={true} />
                        <LabelTextBox label="Email Id" placeholdertext="Email Id" inputtype="email" minVal="" maxVal="" requiredVal={true} />
                        <LabelTextBox label="IEEE Membership ID" placeholdertext="IEEE Membership ID" inputtype="number" minVal="" maxVal="" requiredVal={true} />
                        <DropDownSearch options={branches}/>
                        <LabelTextBox label="College" placeholdertext="College" inputtype="text" minVal="" maxVal="" requiredVal={true} />
                        <LabelTextBox label="Branch" placeholdertext="Branch" inputtype="text" minVal="" maxVal="" requiredVal={true} />
                        <LabelTextBox label="Year of joining College" placeholdertext="Year of joining College" inputtype="number" minVal="2020" maxVal="2023" requiredVal={true} />
                        <LabelTextBox label="Current year" placeholdertext="Current year" inputtype="number" minVal="1" maxVal="4" requiredVal={true} />
                        <LabelTextBox label="Referal ID" placeholdertext="Referal ID" inputtype="text" minVal="" maxVal="" requiredVal={true} />                    
                    </div>                
                    <div className='flex gap-10'>
                        <Button buttontext="Back" buttonAction={null} buttoncolor="#BDBABA"/>
                        <Button buttontext="Next" buttonAction={null} buttoncolor="#EDBB0A"/>
                    </div>
                </div>
            </form>
            <div className='flex justify-center items-center bottom-0 bg-[#D9D9D9] w-full p-3'>Queries? Contact <a href="mailto:mockplacement2023@gmail.com">mockplacement2023@gmail.com</a></div>
        </div>
    )
}