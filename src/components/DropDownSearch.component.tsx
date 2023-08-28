import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function DropDownSearch(props: {options:Array<string>,label:string,placeholderVal:string}){
    const [dispVal,setDispVal] = useState('none');
    const [val,setVal] = useState('')
    const [array,setArray] = useState(props.options) 

    function showHideOptions(){
        if (dispVal == "none"){
            setDispVal('flex');
        }
        else
            setDispVal('none');
    }

    function searchandshow(e: any){
        setVal(e.target.value);
        let newArray:any = [];
        if(val != ""){
            // newArray = array.map((option) =>{
            //     if(option.toLowerCase().indexOf(val.toLowerCase()) !== -1){
            //         console.log(option.toLowerCase().indexOf(val.toLowerCase()));
            //         return option
            //     }
            //     else
            //         return null
            // })
            for (let i = 0;i<array.length;i++){
                if(props.options[i].toLowerCase().indexOf(val.toLowerCase()) !== -1){
                    newArray.push(props.options[i]);
                }
            }
            console.log(val,props.options,newArray)
            setArray(newArray)
        }

        else{
            setArray(props.options)
        }        
    }

    var opacityVal:number;
    const labelStyle = {
        opacity: (opacityVal = (val == ''? 0:100)),
    }

    var c:number;
    const dropdownStyle = {
        display: dispVal,
        maxHeight: 60*5 + 'px',
        bottom: -60*(c = Math.min(array.length,5)) + 'px',
    }

    return(
        <div className=''>
            <div className='flex flex-col gap-1 relative'>
                <label htmlFor="Name" style={labelStyle}>{props.label}</label>
                <div className='relative' onClick={showHideOptions}>
                    <input type="text" name="" id="" onChange={searchandshow} value={val} placeholder={props.placeholderVal} required className='rounded-[10px] p-3 w-[100%] border-solid border-2'/>
                    <div className='flex items-center absolute top-0 right-[10px] h-full'>
                        <button className='bg-transparent'>
                            <FontAwesomeIcon icon={faCaretDown} className='h-[20px]'/>
                        </button>
                    </div>
                </div>   
                <ul className='overflow-y-scroll overflow-x-hidden z-10 absolute w-full flex flex-col' style={dropdownStyle} id="dropdownOptions">
                    {array.map((items) => {return <li key={items} value={items} className='w-full p-3 bg-slate-300 hover:bg-sky-700 flex h-[60px] items-center' onClick={(e) => {
                        setVal(items)
                        showHideOptions()
                    }}>{items}</li>})}
                </ul>             
            </div>
        </div>
    )
}