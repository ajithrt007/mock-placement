export default function Button({buttontext, buttoncolor, buttonAction}){
    const buttonstyle ={
        backgroundColor: buttoncolor,
    }
    return(
        <button onClick={buttonAction} style={buttonstyle} className="py-3 px-5 rounded-[10px]">
            {buttontext}
        </button>
    )
}