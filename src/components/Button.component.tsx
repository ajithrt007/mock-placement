export default function Button(props:{buttontext: string,buttoncolor: string,buttonAction:any,disabledF:boolean}){
    const buttonstyle ={
        backgroundColor: props.buttoncolor,
    }
    return(
        <button onClick={(e) => {
            props.buttonAction()
            }} style={buttonstyle} className="py-3 px-5 rounded-[10px]" disabled={props.disabledF}>
            {props.buttontext}
        </button>
    )
}