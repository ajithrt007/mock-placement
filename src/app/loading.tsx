export default function Loading() {
    return(
        <div className="flex flex-col gap-5 items-center justify-center w-screen h-screen bg-[#F9DC7E]">
            <img src="/loading.gif" alt="" className='sm:w-[30%] w-[60%]'/>
            <p className="text-2xl font-semibold">Loading...</p>
        </div>
    )
  }