import { useState } from "react"

export default function LabelTextBox(props:{label:string,placeholdertext:string,inputtype:string,minVal:string,maxVal:string,requiredVal:boolean}){
    var opacityVal:number = 0;
    const [value, setValue] = useState('');
    // const [flag,setFlag] = useState(true);
    if (value != ''){
        opacityVal = 100
    }
    const labelStyle = {
        opacity: opacityVal,
    }
    var flagmsg:string = "";
    switch(props.inputtype){
        case "text": 
            break;

        case "number": 
            if (isNaN(Number(value)) == true){
                flagmsg = "Not an Integer";
            }
            break;

        case "pnumber":
            if (isNaN(Number(value)) == true){
                flagmsg = "Not an Integer";
            }
            if(value.length > 10){
                flagmsg = "Enter 10 digits";
            }
            break;

        case "email":
            if(!value.includes('@') && value.length > 5){
                flagmsg = "Enter valid email id";
            }
    }
    return(
        <div className='flex flex-col gap-1'>
            <label htmlFor="Name" style={labelStyle}>{props.label}</label>
            <input type={props.inputtype}  onChange={(e) => {
                setValue(e.target.value)
                }} name="" id="" placeholder={props.placeholdertext} value={value} min={props.minVal} max={props.maxVal} required={props.requiredVal} className='rounded-[10px] p-3 w-[100%] border-solid border-2'/>
            {flagmsg != "" && <p className="text-xs text-red-600">{flagmsg}</p>}
        </div>
    )
}

//create search dropdown
//create error check in forms and activate next button based on it.