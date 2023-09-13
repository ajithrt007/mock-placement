'use client'
import { useEffect, useState } from 'react'
import InputBox from '@/components/InputBox'
import DropDownSearch from '@/components/DropDownSearch.component'
import Button from '@/components/Button.component'
import { collegeList, branches, yearofjoining, currentyear } from '../../../public/formOptionData'
import CheckBoxes from '@/components/CheckBoxes'
import { participants,mech,cse,bio,ec } from '../../../public/whatsappGroupLink'

export default function RegisterPage(){
    const [stage,setStage] = useState(1)
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

    const[name,setName] = useState('');
    const[num,setNum] = useState('');
    const[email,setEmail] = useState('');
    const[memid,setMemID] = useState('');
    const[college,setCollege] = useState('');
    const[branch,setBranch] = useState('');
    const[yearJoin,setYearJoin] = useState('');
    const[cyear,setCyear] = useState('');
    const[referal,setReferal] = useState('');
    const[resume,setResume] = useState('');
    const[choice1,setChoice1] = useState('');
    const[choice2,setChoice2] = useState('');
    const[confirmation,setConfirmation] = useState('');

    const [formD,setFormD] = useState({
    time: Date.now(),
    name : '',
    num : '',
    email : '',
    memid : '',
    college : '',
    branch : '',
    yearJoin : '',
    cyear : '',
    referal : '',
    resumeLink : '',
    choice1 : '',
    choice2 : '',
    confirmation : ''})

    useEffect(() => {
        setFormD({
            time: Date.now(),
            name : name,
            num : num,
            email : email,
            memid : memid,
            college : college,
            branch : branch,
            yearJoin : yearJoin,
            cyear : cyear,
            referal : referal,
            resumeLink : resume,
            choice1 : choice1,
            choice2 : choice2,
            confirmation : confirmation})
    },[name,num,email,memid,college,branch,yearJoin,cyear,referal,resume,choice1,choice2,confirmation])

    // console.log(formD)

    const getName = (dname:string) => {
        setName(dname)
    }
    const getNum = (dnum:string) => {
        setNum(dnum)
    }
    const getEmail = (demail:string) => {
        setEmail(demail)
    }
    const getMemID = (dmemid:string) => {
        setMemID(dmemid)
    }
    const getCollege = (dcollege:string) => {
        console.log("The data got is" + dcollege)
        setCollege(dcollege)
    }
    const getBranch = (dbranch:string) => {
        setBranch(dbranch)
    }
    const getYearJoin = (dyearJoin:string) => {
        setYearJoin(dyearJoin)
    }
    const getCyear = (dcyear:string) => {
        setCyear(dcyear)
    }
    const getReferal = (dreferal:string) => {
        setReferal(dreferal)
    }
    const getResume = (dresume:string) => {
        setResume(dresume)
    }

    return(
        <>
            <div className='items-center bg-[#F1F1F1] p-5 flex w-full justify-center'>

                {stage == 1 && <form action="" onSubmit={(e) => {e.preventDefault()}} className='flex flex-col gap-10 w-full items-center'>
                    <div className='bg-white p-5 flex flex-col gap-5 rounded-[15px] w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>
                        <InputBox getDataFn={getName} label="Name" placeholderTxt="Name" inputType="text"/>
                        <InputBox getDataFn={getNum} label="Phone No" placeholderTxt="Phone No" inputType="text"/>
                        <InputBox getDataFn={getEmail} label="Email" placeholderTxt="Email" inputType="email"/>
                        <div className='flex flex-col gap-1'>
                            <InputBox getDataFn={getMemID} label="IEEE Membership ID" placeholderTxt="IEEE Membership ID" inputType="number"/>
                            <p className="text-xs">If non an IEEE member enter 0</p>
                        </div>
                        <DropDownSearch options={collegeList} label="College" placeholderVal='Choose your College' getDataFn={getCollege}/>
                        <DropDownSearch options={branches} label="Branch" placeholderVal='Choose your Branch' getDataFn={getBranch}/>
                        <DropDownSearch options={yearofjoining} label="Year of Joining" placeholderVal='Choose your Joining year' getDataFn={getYearJoin}/>
                        <DropDownSearch options={currentyear} label="Cuurent Year" placeholderVal='Choose your Joining year' getDataFn={getCyear}/>
                        <InputBox getDataFn={getReferal} label="Referal ID" placeholderTxt="Referal ID" inputType="text"/>
                    </div> 
                    <div className='flex gap-10'>
                        <Button buttontext="Back" buttonAction={null} buttoncolor="#BDBABA"/>
                        <Button buttontext="Next" buttonAction={() => {
                            if(Number(cyear) >2){
                                setStage(2)
                            }
                            else{
                                setStage(3)
                            }
                        }} buttoncolor="#EDBB0A"/>
                    </div>
                </form>
                }

                {stage == 2 && <form action="" onSubmit={(e) => {e.preventDefault()}} className='flex flex-col gap-10 w-full items-center'>            
            <div className='bg-white p-5 flex flex-col gap-5 rounded-[15px] w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>
                <div className='flex flex-col gap-0'>
                    <InputBox label="Resume Drive Link" placeholderTxt="Drive Link" inputType="text" getDataFn={getResume}/>  
                    <p className='text-xs'>Please make sure the access is “Anyone with the link can view”.</p>                
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-0'>
                        <label htmlFor="Choose">Choose your Company</label>
                        <p className='text-xs'>Atmost 2 of them can be selected</p>                 
                    </div>
                    <CheckBoxes/>
                </div>                  
            </div>                
            <div className='flex gap-10'>
                <Button buttontext="Back" buttonAction={null} buttoncolor="#BDBABA"/>
                <Button buttontext="Next" buttonAction={() => {
                    setStage(3);
                }} buttoncolor="#EDBB0A"/>
            </div>
        </form>}

            {stage == 3 && <form action="" onSubmit={(e) => {e.preventDefault()}} className='flex flex-col gap-10 w-full items-center'>
            <a href="https://en.wikipedia.org/wiki/Next.js" className='bg-white gap-5 p-5 flex justify-between rounded-[15px] w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>
                <img src="/wp.svg" alt="" className='h-full'/>
                <div className='flex flex-col gap-1'>
                    <p className='text-lg '>Mock Placement Participants Group</p>
                    <p className='text-sm'>Click here to join the participants group of Mock Placements for seamless communication</p>
                </div>
            </a>
            {Number(cyear) > 2 && <div></div> }                
            <div className='flex gap-10'>
                <Button buttontext="Complete Registration" buttonAction={() => {
                    setStage(3);
                }} buttoncolor="#EDBB0A"/>
            </div>
            </form>}

            </div>
        </>
    )
}