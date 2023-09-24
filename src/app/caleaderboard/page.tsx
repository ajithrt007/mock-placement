"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LeaderRow from "@/components/LeaderRow";
import Link from "next/link";
import { campusambassadors } from "../../../public/CAScore";

export default function CALeaderboard() {
  type campusambassador = {
    name: string;
    score: number;
    college: string;
  };

  campusambassadors.sort(
    (a: campusambassador, b: campusambassador) => b.score - a.score
  );

  return (
    <section className="w-full flex flex-col items-center py-10">
      <div className="flex items-center px-5">
        <Link
          href="/"
          className="rounded-full bg-[#EDBB0A] p-3 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="h-[20px]" />
        </Link>
        <p className="text-[#EDBB0A] font-extrabold text-2xl p-8">
          Campus Ambassadors Leader Board
        </p>
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
        {campusambassadors?.map((items: campusambassador) => {
          return (
            <LeaderRow
              slno={1}
              name={items.name}
              college={items.college}
              points={items.score}
              key={items.name}
            />
          );
        })}

        {/* <LeaderRow
            slno={1}
            name="Ajith R T"
            college="SCT College of Engineering and Technology"
            points={987}
          /> */}
      </div>
    </section>
  );
}
