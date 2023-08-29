export default function CheckBoxRow(props:{checkboxName:string}){
    return(
        <div className="flex justify-between">
            <input type="checkbox" name={props.checkboxName} id={props.checkboxName} required/>
            <div className="flex flex-col w-[90%]">
                <img src="/Slack.jpg" alt="" className="rounded-t-[15px] w-[100%]"/>
                <div className="flex flex-col gap-2 bg-[#F1F1F1] p-5 rounded-b-[15px]">
                    <label htmlFor="Software Engineer" className="text-lg">Software Engineer</label>
                    <p className='text-xs'>Job Requirements</p> 
                    <p className="text-md">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>                
                </div>
            </div>
        </div>
    )
}