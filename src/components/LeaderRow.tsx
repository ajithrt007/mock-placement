export default function LeaderRow(props:{slno:number,name:string,college:string,points:number}){
    return(
        <div className="flex items-start justify-between even:bg-white odd:bg-[#E9E9E9] sm:rounded-xl rounded-none p-3 w-full">
            <p className="w-[30px] mr-[6%]">{props.slno}</p>
            <div className="flex flex-col mr-[6%]" style={{width:'calc(100% - 80px)'}}>
                <p className="text-lg font-semibold">{props.name}</p>
                <p className="text-sm">{props.college}</p>
            </div>
            <p className="w-[50px]">{props.points}</p>
        </div>
    )
}