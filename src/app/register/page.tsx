'use client'

// import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FormEvent, useEffect, useState } from 'react'
import InputBox from '@/components/InputBox'
import DropDownSearch from '@/components/DropDownSearch.component'
import Button from '@/components/Button.component'
import { collegeList, branches, yearofjoining, currentyear } from '../../../public/formOptionData'
import { participants,mech,cse,bio,ec } from '../../../public/whatsappGroupLink'
import CheckBoxRow from '@/components/CheckBoxRow'
import { useRouter } from 'next/navigation'

export default function RegisterPage(){
    const router = useRouter()
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
    const[cyear,setCyear] = useState('3');
    const[referal,setReferal] = useState('');
    const[resume,setResume] = useState('');
    const[choice1,setChoice1] = useState('');
    const[choice2,setChoice2] = useState('');
    const[confirmation,setConfirmation] = useState(false);

    const [optionA,setOptionA] = useState(0)
    const [optionB,setOptionB] = useState(0)
    const [optionC,setOptionC] = useState(0)
    const [optionD,setOptionD] = useState(0)
    
    const optionsArr:Array<string> = ['Software Engineer','Electrical Engineer','Mechanical Engineer','Biotech Engineer']
    var choices:Array<Number> = [0,0,0,0];

    function getTimestamp() {
        const now = new Date();
        // Format the timestamp in a human-readable form
        const formattedDate = now.toLocaleString(); // You can customize the format as needed      
        return formattedDate;
      }

    const [formD,setFormD] = useState({
    time: getTimestamp(),
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
    confirmation : false})

    useEffect(() => {
        // console.log("USe effect called")
        setFormD({
            time: getTimestamp(),
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
    },[name,num,email,memid,college,branch,yearJoin,cyear,referal,resume,confirmation,choice1,choice2])

    

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
    const getOptionA = (doptionA: Boolean) => {
        if (doptionA) {
            setOptionA(1);
        } else {
            setOptionA(0);
        }        
    }
    const getOptionB = (doptionB: Boolean) => {
        if (doptionB) {
            setOptionB(1);
        } else {
            setOptionB(0);
        }
    }
    const getOptionC = (doptionC: Boolean) => {
        if (doptionC) {
            setOptionC(1);
        } else {
            setOptionC(0);
        }
    }
    const getOptionD = (doptionD: Boolean) => {
        if (doptionD) {
            setOptionD(1);
        } else {
            setOptionD(0);
        }
    }

    choices = [optionA,optionB,optionC,optionD]

    function findNthOne(no:number){
        let count:number=0;
        for(let i = 0;i<choices.length;i++){
            if(choices[i] === 1){
                count = count + 1;
                if(count === no){
                    return optionsArr[i]
                }
            }
        }
        return 'nil'
    }
    const sendData = async () => {
        const response: any = await fetch('/api/submit', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formD)
          });
          

        const content = await response.json();
        alert(content.data.tableRange)
    }

    // console.log("heheheh",(choice1 === optionsArr[1] || choice2 === optionsArr[1]),choice1 === optionsArr[1],choice2 === optionsArr[1])
    // console.log("ehehehe",(choice1 === optionsArr[2] || choice2 === optionsArr[2]),choice1 === optionsArr[2],choice2 === optionsArr[1])

    function checkSelectedOptions(arr:Array<Number>){
        var count:number = 0;
        for(let i = 0;i<arr.length;i++){
            if(arr[i] === 1){
                count = count + 1;
            }
        }
        if (count > 2 || count == 0){
            return false
        }
        else{
            return true
        }
    }

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        console.log(formD)
    }

    return(
        <div className=''>
            <div className='w-[100vw] bg-[#1E1E1E] flex px-5 justify-between fixed top-0 items-center h-[70px] z-20'>
                <img src="/mockplacement-yellow.svg" alt="" className='h-[25px]'/>
                    <div className='text-white flex gap-5'>
                        {/* <a href='#'>About</a>
                        <a href='#'>Events</a>
                        <Link href="/mockplacement">Mock Placement</Link>
                        <a href='#'>Calander</a>
                        <Link href="/leaderboard">Leaderboard</Link>
                        <Link href="/register">Register</Link>
                        <a href='#'>Contact</a> */}
                        <button className=''>
                            <FontAwesomeIcon icon={faBars} className='h-[20px]'/>
                        </button>                       
                    </div>
            </div>
            <div className='items-center mt-[70px] bg-[#F1F1F1] p-5 flex w-full justify-center'>

                {stage == 1 && <form action="" onSubmit={(e) => {e.preventDefault()}} className='flex flex-col gap-10 w-full items-center'>
                    <div className='bg-white p-5 flex flex-col gap-5 rounded-[15px] w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>
                        <InputBox getDataFn={getName} label="Name" placeholderTxt="Name" inputType="text"/>
                        <InputBox getDataFn={getNum} label="Phone No" placeholderTxt="Phone No" inputType="text"/>
                        <InputBox getDataFn={getEmail} label="Email" placeholderTxt="Email" inputType="email"/>
                        <div className='flex flex-col gap-1'>
                            <InputBox getDataFn={getMemID} label="IEEE Membership ID" placeholderTxt="IEEE Membership ID" inputType="text"/>
                            <p className="text-xs">If non an IEEE member enter 0</p>
                        </div>
                        <DropDownSearch options={collegeList} label="College" placeholderVal='Choose your College' getDataFn={getCollege}/>
                        <DropDownSearch options={branches} label="Branch" placeholderVal='Choose your Branch' getDataFn={getBranch}/>
                        <DropDownSearch options={yearofjoining} label="Year of Joining" placeholderVal='Choose your Joining year' getDataFn={getYearJoin}/>
                        <DropDownSearch options={currentyear} label="Cuurent Year" placeholderVal='Choose your Joining year' getDataFn={getCyear}/>
                        <InputBox getDataFn={getReferal} label="Referal ID" placeholderTxt="Referal ID" inputType="text"/>
                    </div> 
                    <div className='flex gap-10'>
                        <Button buttontext="Back" buttonAction={() => {
                    router.push('/')
                }} buttoncolor="#BDBABA" disabledF={true}/>
                        <Button buttontext="Next" buttonAction={() => {
                            sendData()
                            if(Number(cyear) >2){
                                setStage(2)
                            }
                            else{
                                setStage(3)
                            }
                        }} buttoncolor="#EDBB0A" disabledF={false}/>
                    </div>
                </form>
                }

                {stage == 2 && <form action="" onSubmit={(e) => {e.preventDefault()}} className='flex flex-col gap-10 w-full items-center'>            
            <div className='bg-white p-5 flex flex-col gap-5 rounded-[15px] w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>
                <div className='flex flex-col gap-0'>
                    <InputBox label="Resume Drive Link" placeholderTxt="Drive Link" inputType="text" getDataFn={getResume}/>  
                    <p className='text-xs'>Please make sure the access is “Anyone with the lisetStage(3)nk can view”.</p>                
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-0'>
                        <label htmlFor="Choose">Choose your Company</label>
                        <p className='text-xs'>Atmost 2 of them can be selected</p>                 
                    </div>
                    <div className="flex flex-col gap-7">
                        <CheckBoxRow checkboxName="Software" getDataFnC={getOptionA}/>
                        <CheckBoxRow checkboxName="Mech" getDataFnC={getOptionB}/>
                        <CheckBoxRow checkboxName="EC" getDataFnC={getOptionC}/>
                        <CheckBoxRow checkboxName="Bio" getDataFnC={getOptionD}/>
                        <p className='text-sm text-red-600' style={{
                            visibility:(checkSelectedOptions(choices) == true? 'hidden':'visible'),
                        }}>Choose atmost two options</p>
                    </div>
                </div>                  
            </div>                
            <div className='flex gap-10'>
                <Button buttontext="Back" buttonAction={() => {setStage(1)}} buttoncolor="#BDBABA" disabledF={false}/>
                <Button buttontext="Next" buttonAction={() => {
                    console.log("1 = " + findNthOne(1) + "2 = " + findNthOne(2))
                    setChoice1(findNthOne(1))
                    setChoice2(findNthOne(2))
                    setStage(3);
                }} buttoncolor="#EDBB0A" disabledF={!((checkSelectedOptions(choices)) && (resume != ''))}/>
            </div>
        </form>}

            {stage == 3 && <form action="" onSubmit={(e) => {e.preventDefault()}} className='flex flex-col gap-5 w-full items-center'>
            <a href="https://en.wikipedia.org/wiki/Next.js" className='bg-white gap-5 p-5 flex justify-between rounded-[15px] w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>
                <img src="/wp.svg" alt="" className='h-full'/>
                <div className='flex flex-col gap-1'>
                    <p className='text-lg '>Mock Placement Participants Group</p>
                    <p className='text-sm'>Click here to join the participants group of Mock Placements for seamless communication</p>
                </div>
            </a>
            {Number(cyear) > 2 && <>
                {(choice1 === optionsArr[0] || choice2 === optionsArr[0]) && <a href="https://en.wikipedia.org/wiki/Next.js" className='bg-white gap-5 p-5 flex justify-between rounded-[15px] w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>
                    <img src="/wp.svg" alt="" className='h-full'/>
                    <div className='flex flex-col gap-1'>
                        <p className='text-lg '>{optionsArr[0]} Group</p>
                        <p className='text-sm'>Click here to join the participants group of Mock Placements for seamless communication</p>
                    </div>
                </a>}
                {(choice1 === optionsArr[1] || choice2 === optionsArr[1]) && <a href="https://en.wikipedia.org/wiki/Next.js" className='bg-white gap-5 p-5 flex justify-between rounded-[15px] w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>
                    <img src="/wp.svg" alt="" className='h-full'/>
                    <div className='flex flex-col gap-1'>
                        <p className='text-lg '>{optionsArr[1]} Group</p>
                        <p className='text-sm'>Click here to join the participants group of Mock Placements for seamless communication</p>
                    </div>
                </a>}
                {(choice1 === optionsArr[2] || choice2 === optionsArr[2]) && <a href="https://en.wikipedia.org/wiki/Next.js" className='bg-white gap-5 p-5 flex justify-between rounded-[15px] w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>
                    <img src="/wp.svg" alt="" className='h-full'/>
                    <div className='flex flex-col gap-1'>
                        <p className='text-lg '>{optionsArr[2]} Group</p>
                        <p className='text-sm'>Click here to join the participants group of Mock Placements for seamless communication</p>
                    </div>
                </a>}
                {(choice1 === optionsArr[3] || choice2 === optionsArr[3]) && <a href="https://en.wikipedia.org/wiki/Next.js" className='bg-white gap-5 p-5 flex justify-between rounded-[15px] w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>
                    <img src="/wp.svg" alt="" className='h-full'/>
                    <div className='flex flex-col gap-1'>
                        <p className='text-lg '>{optionsArr[3]} Group</p>
                        <p className='text-sm'>Click here to join the participants group of Mock Placements for seamless communication</p>
                    </div>
                </a>}
            </> }      
            <div className='flex gap-1'>
                <input type="checkbox" name="Confirmation" id="Confirmation" required checked={confirmation}
            onChange={(e) => {
                setConfirmation(e.target.checked);}}/> 
                <label htmlFor="Confirmation" className="text-lg">I have joined the groups above mentioned</label>       
            </div>          
            <div className='flex gap-10'>
                <Button buttontext="Complete Registration" buttonAction={(e:FormEvent<HTMLFormElement>) => {
                    handleSubmit(e)
                    router.push('/')
                }} buttoncolor="#EDBB0A" disabledF={!confirmation}/>
            </div>
            </form>}
            {stage == 4 && <div className="min-height flex flex-col gap-5 items-center justify-center w-screen">
            <p className="text-2xl font-semibold">Registration Closed</p>
            </div>}
            </div>            
            <div className='flex justify-center items-center bottom-0 bg-[#D9D9D9] w-full p-3 text-sm gap-1'>Queries? Contact <a href="mailto:mockplacement2023@gmail.com" className='underline-offset-1 text-blue-600'>mockplacement2023@gmail.com</a></div>
        </div>
    )
}