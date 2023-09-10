export default function LeaderRow(){
    return(
        <div className="flex items-start justify-between even:bg-white odd:bg-[#E9E9E9] sm:rounded-xl rounded-none p-3 w-full">
            <p className="w-[30px] mr-[6%]">1</p>
            <div className="flex flex-col mr-[6%]">
                <p className="text-lg font-semibold">Ajith R T</p>
                <p className="text-sm">Sree Chitra Thirunal College of Engineering and Technology</p>
            </div>
            <p className="w-[50px]">987</p>
        </div>
    )
}