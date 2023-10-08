"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LeaderRow from "@/components/LeaderRow";
import Link from "next/link";
import { participants } from "../../../public/Leaderboard";

export default function CALeaderboard() {
  type participant = {
    name: string;
    percentage: number;
    college: string;
  };

  participants.sort(
    (a: participant, b: participant) => b.percentage - a.percentage
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
          Leader Board
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
          <p className="w-[90px]">Percentage</p>
        </div>
        {participants?.map((items: participant, index: number) => {
          return (
            <LeaderRow
              slno={index + 1}
              name={items.name}
              college={items.college}
              points={items.percentage}
              key={items.name}
            />
          );
        })}
      </div>
    </section>
  );
}
