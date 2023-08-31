import { useState } from "react"

export default function InputBox(props:{getDataFn:any,label:string,placeholderTxt:string,inputType:string}){

    const [val,setVal] = useState('')
    // console.log("rendered" + val)
    var opacityVal:number;
    const labelStyle = {
        opacity: (opacityVal = (val == ''? 0:100)),
    }

    return(
        <div className='flex flex-col gap-1'>
            <label htmlFor="Name" style={labelStyle}>{props.label}</label>
            <input type={props.inputType} className='rounded-[10px] p-3 w-[100%] border-solid border-2' placeholder={props.placeholderTxt} required onChange={(e) => {
                setVal(e.target.value)
                props.getDataFn(e.target.value)
            }}/>
            {/* <p className="text-xs text-red-600">{"flagmsg"}</p> */}
        </div>
    )
}