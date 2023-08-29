import LabelTextBox from '@/components/LabelTextBox.component'
import Button from '@/components/Button.component'
import DropDownSearch from '@/components/DropDownSearch.component'
import { collegeList,branches,yearofjoining,currentyear } from '../../public/formOptionData'
import { useState } from 'react'

export default function BasicForm(props:{stageChange:any}){

    const[name,setName] = useState('');
    const[num,setNum] = useState('');
    const[email,setEmail] = useState('');
    const[memid,setMemID] = useState('');
    const[college,setCollege] = useState('');
    const[branch,setBranch] = useState('');
    const[yearJoin,setYearJoin] = useState('');
    const[cyear,setCyear] = useState('');
    const[referal,setReferal] = useState('');

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

    const formData = {
        name,
        num,
        email,
        memid,
        college,
        branch,
        yearJoin,
        cyear,
        referal,
    }
    console.log(formData)

    const consoleForm = () =>{
        console.log("Clicked" + formData.name)
        props.stageChange(cyear)
    }    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    return(
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-10 w-full items-center'>            
                <div className='bg-white p-5 flex flex-col gap-5 rounded-[15px] w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>                    
                    <LabelTextBox label="Name" placeholdertext="Name" inputtype="text" minVal="" maxVal="" requiredVal={true}  getDataFn={getName}/>
                    <LabelTextBox label="Phone Number" placeholdertext="Phone Number" inputtype="pnumber" minVal="" maxVal="" requiredVal={true}  getDataFn={getNum}/>
                    <LabelTextBox label="Email Id" placeholdertext="Email Id" inputtype="email" minVal="" maxVal="" requiredVal={true}  getDataFn={getEmail}/>
                    <LabelTextBox label="IEEE Membership ID" placeholdertext="IEEE Membership ID" inputtype="number" minVal="" maxVal="" requiredVal={false}  getDataFn={getMemID}/>
                    <DropDownSearch options={collegeList} label="College" placeholderVal="Choose your college" getDataFn={getCollege}/>
                    <DropDownSearch options={branches} label="Branch" placeholderVal="Choose your branch" getDataFn={getBranch}/>
                    <DropDownSearch options={yearofjoining} label="Year of joining College" placeholderVal="Choose you year of joining" getDataFn={getYearJoin}/>
                    <DropDownSearch options={currentyear} label="Current year" placeholderVal="Choose your current year" getDataFn={getCyear}/>
                    <LabelTextBox label="Referal ID" placeholdertext="Referal ID" inputtype="text" minVal="" maxVal="" requiredVal={true}  getDataFn={getReferal}/>                    
                </div>                
                <div className='flex gap-10'>
                    <Button buttontext="Back" buttonAction={null} buttoncolor="#BDBABA"/>
                    <Button buttontext="Next" buttonAction={consoleForm} buttoncolor="#EDBB0A"/>
                </div>
        </form>
    )
}