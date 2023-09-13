"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LeaderRow from "@/components/LeaderRow";
import Link from "next/link";

export default function Leaderboard() {
  return (
    <>
      <section className="w-full flex flex-col items-center">
        <div className="flex items-center">
            <Link href="/" className="rounded-full bg-[#EDBB0A] p-3"><FontAwesomeIcon icon={faArrowLeft} className='h-[20px]'/></Link>
          <div className="flex p-8">
            <h1 className=" font-extrabold text-2xl whitespace-nowrap">
              Leader
            </h1>
            <p className="text-[#EDBB0A] font-extrabold text-2xl whitespace-nowrap">
              Board
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:w-[47%] md:w-[60%] w-full">
          <div className="flex items-start rounded-xl p-3 w-full">
            <p className="w-[30px] mr-[6%]">Sl No</p>
            <div
              className="flex flex-col mr-[6%]"
              style={{ width: "calc(100% - 80px)" }}
            >
              <p className="text-lg font-semibold">Name</p>
            </div>
            <p className="w-[50px]">Points</p>
          </div>
          <LeaderRow
            slno={1}
            name="Ajith R T"
            college="SCT College of Engineering and Technology"
            points={987}
          />
          <LeaderRow
            slno={1}
            name="Ajith R T"
            college="SCT College of Engineering and Technology"
            points={987}
          />
          <LeaderRow
            slno={1}
            name="Ajith R T"
            college="SCT College of Engineering and Technology"
            points={987}
          />
          <LeaderRow
            slno={1}
            name="Ajith R T"
            college="SCT College of Engineering and Technology"
            points={987}
          />
          <LeaderRow
            slno={1}
            name="Ajith R T"
            college="SCT College of Engineering and Technology"
            points={987}
          />
          <LeaderRow
            slno={1}
            name="Ajith R T"
            college="SCT College of Engineering and Technology"
            points={987}
          />
          <LeaderRow
            slno={1}
            name="Ajith R T"
            college="SCT College of Engineering and Technology"
            points={987}
          />
          <LeaderRow
            slno={1}
            name="Ajith R T"
            college="SCT College of Engineering and Technology"
            points={987}
          />
          <LeaderRow
            slno={1}
            name="Ajith R T"
            college="SCT College of Engineering and Technology"
            points={987}
          />
          <LeaderRow
            slno={1}
            name="Ajith R T"
            college="SCT College of Engineering and Technology"
            points={987}
          />
          <LeaderRow
            slno={1}
            name="Ajith R T"
            college="SCT College of Engineering and Technology"
            points={987}
          />
        </div>
      </section>
    </>
  );
}
