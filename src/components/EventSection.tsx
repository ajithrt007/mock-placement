export default function EventSection(props:{image:string,heading:string,content:string}){
    return(
        <section className='even:bg-white odd:bg-[#E9E9E9] flex odd:flex-row even:flex-row-reverse p-10 gap-10 items-center flex-wrap md:flex-nowrap'>
            <img src={props.image} alt="" />
            <div className='flex flex-col gap-5 items-start'>
              <h1 className='font-extrabold text-2xl whitespace-nowrap text-center'>{props.heading}</h1>
              <p>{props.content}</p>
            </div>
        </section>
    )
}