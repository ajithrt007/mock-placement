'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import LeaderRow from '@/components/LeaderRow'

export default function Leaderboard(){
    return(
        <div>
            <div className="sticky top-0 z-10">
                <div className='text-sm tracking-wide bg-[#EDBB0A] flex items-center h-[30px]'>
                    Deadline to Register: 16th September 2023
                </div>
                <div className='w-[100vw] bg-[#1E1E1E] flex px-5 justify-between items-center h-[60px] z-20'>
                    <img src="/mockplacement-yellow.svg" alt="" className='h-[25px]'/>
                    <div className='text-white flex gap-5'>
                            {/* <a href='#'>About</a>
                            <a href='#'>Events</a>
                            <Link href="/mockplacement">Mock Placement</Link>
                            <a href='#'>Calander</a>
                            <Link href="/leaderboard">Leaderboard</Link>
                            <Link href="/register">Register</Link>
                            <a href='#'>Contact</a> */}
                        <button className=''>
                            <FontAwesomeIcon icon={faBars} className='h-[20px]'/>
                        </button>                       
                    </div>
                </div>            
            </div>     
            <section className='w-full flex flex-col items-center'>
                <div className='flex p-8'>
                    <h1 className=' font-extrabold text-2xl whitespace-nowrap'>Leader</h1>
                    <p className='text-[#EDBB0A] font-extrabold text-2xl whitespace-nowrap'>Board</p>
                </div>
                <div className='flex flex-col items-center lg:w-[47%] md:w-[60%] w-full'>
                    <div className="flex items-start rounded-xl p-3 w-full">
                        <p className="w-[30px] mr-[6%]">Sl No</p>
                        <div className="flex flex-col mr-[6%]" style={{width:'calc(100% - 80px)'}}>
                            <p className="text-lg font-semibold">Name</p>
                        </div>
                        <p className="w-[50px]">Points</p>
                    </div>
                    <LeaderRow slno={1} name="Ajith R T" college="SCT College of Engineering and Technology" points={987}/>
                    <LeaderRow slno={1} name="Ajith R T" college="SCT College of Engineering and Technology" points={987}/>
                    <LeaderRow slno={1} name="Ajith R T" college="SCT College of Engineering and Technology" points={987}/>
                    <LeaderRow slno={1} name="Ajith R T" college="SCT College of Engineering and Technology" points={987}/>
                    <LeaderRow slno={1} name="Ajith R T" college="SCT College of Engineering and Technology" points={987}/>
                    <LeaderRow slno={1} name="Ajith R T" college="SCT College of Engineering and Technology" points={987}/>
                    <LeaderRow slno={1} name="Ajith R T" college="SCT College of Engineering and Technology" points={987}/>
                    <LeaderRow slno={1} name="Ajith R T" college="SCT College of Engineering and Technology" points={987}/>
                    <LeaderRow slno={1} name="Ajith R T" college="SCT College of Engineering and Technology" points={987}/>
                    <LeaderRow slno={1} name="Ajith R T" college="SCT College of Engineering and Technology" points={987}/>
                    <LeaderRow slno={1} name="Ajith R T" college="SCT College of Engineering and Technology" points={987}/>
                </div>
            </section>                                 
        </div>
    )
}