export default function Button(props:{buttontext: string,buttoncolor: string,buttonAction:any}){
    const buttonstyle ={
        backgroundColor: props.buttoncolor,
    }
    return(
        <button onClick={(e) => {
            props.buttonAction()
            }} style={buttonstyle} className="py-2 px-5 rounded-[10px]">
            {props.buttontext}
        </button>
    )
}