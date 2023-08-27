import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function DropDownSearch({options}){
    const [dispVal,setDispVal] = useState('none');
    const [val,setVal] = useState('')
    const [array,setArray] = useState(options)

    function showHideOptions(){
        if (dispVal == "none")
            setDispVal('flex');
        else
            setDispVal('none');
    }

    function searchandshow(e){
        setVal(e.target.value);

        if(val != ""){
            setArray(
                options.map((option) =>{
                    if(option.indexOf(val) !== -1){
                        console.log(val,array);
                        return option
                    }
                })
            )
        }

        else{
            setArray(options)
        }        
    }

    const dropdownStyle = {
        display: dispVal
    }
    
    return(
        <div className=''>
            <div className='flex flex-col gap-1 relative'>
                <label htmlFor="Name">label</label>
                <div className='relative' onClick={showHideOptions}>
                    <input type="text" name="" id="" onChange={searchandshow} value={val} placeholder="sea" required className='rounded-[10px] p-3 w-[100%] border-solid border-2'/>
                    <div className='flex items-center absolute top-0 right-[10px] h-full'>
                        <button className='bg-transparent'>
                            <FontAwesomeIcon icon={faCaretDown} className='h-[20px]'/>
                        </button>
                    </div>
                </div>   
                <ul className='max-h-[40vh] overflow-y-scroll overflow-x-hidden z-10 absolute w-full bottom-[-41vh] flex flex-col' style={dropdownStyle}>
                    {array.map((items) => {return <li key={items} value={items} className='w-full p-3 bg-slate-300 hover:bg-sky-700' onClick={(e) => {
                        setVal(items)
                        showHideOptions()
                    }}>{items}</li>})}
                </ul>             
            </div>
        </div>
    )
}