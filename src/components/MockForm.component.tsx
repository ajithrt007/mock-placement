import LabelTextBox from '@/components/LabelTextBox.component'
import Button from '@/components/Button.component'
import CheckBoxes from './CheckBoxes.component';
import { useState } from 'react'

export default function MockForm(){

    const[link,setLink] = useState('');
    const getLink = (dlink:string) => {
        setLink(dlink)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return(
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-10 w-full items-center'>            
            <div className='bg-white p-5 flex flex-col gap-5 rounded-[15px] w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>
                <div className='flex flex-col gap-0'>
                    <LabelTextBox label="Resume Drive Link" placeholdertext="Drive Link" inputtype="text" minVal="" maxVal="" requiredVal={true}  getDataFn={getLink}/>  
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
                <Button buttontext="Next" buttonAction={null} buttoncolor="#EDBB0A"/>
            </div>
        </form>
    )
}