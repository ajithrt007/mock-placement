"use client";
import Link from "next/link";
import Button from "@/components/Button.component";
import { useRouter } from "next/navigation";
import FeatureSquare from "@/components/FeatureSquare";
import EventSection from "@/components/EventSection";
import FAQ from "@/components/FAQ";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCheck,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const firstSection = {
    height: "calc(100vh - 60px - 17vh)",
  };

  const router = useRouter();
  return (
    <>
      <section
        className="flex flex-col gap-10 w-full px-5 items-center justify-center"
        style={firstSection}
      >
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="https://ieeesctsb.org/">
            <img src="/SB Black.svg" alt="" className="sm:h-[50px] h-[23px]" />
          </Link>
          In Collaboration with
          <Link href="https://yp.ieeekerala.org/">
            <img src="/YP_black.svg" alt="" className="sm:h-[50px] h-[23px]" />
          </Link>
        </div>
        <img
          src="/mockplacement-yellow.svg"
          alt=""
          className="lg:w-[42%] md:w-[62%] w-[80%]"
        />
        <p className="text-3xl font-bold">FUTURE IS KNOCKING</p>

        <p className="py-2 px-5 rounded-[10px] bg-[#EDBB0A] tracking-wide">
          Registration Opening Soon
        </p>
        {/* <Button buttontext="Register" buttoncolor="#EDBB0A" buttonAction={()=>{router.push('/register')}}/> */}
        {/* <a href="https://nextjs.org/docs/app/api-reference/functions/redirect" className="py-2 px-5 rounded-[10px] bg-[#EDBB0A] tracking-wide" target="_blank" rel="noopener noreferrer">Register</a> */}
      </section>
      <section className="bg-[#1E1E1E] md:py-5 md:px-10 p-7">
        <div className="flex gap-1 w-full items-center justify-center p-8">
          <h1 className=" font-extrabold text-2xl text-white whitespace-nowrap">
            What is
          </h1>
          <p className="text-[#EDBB0A] font-extrabold text-2xl whitespace-nowrap">
            Mock Placement ?
          </p>
        </div>
        <p className="text-white text-sm tracking-wide pb-7 text-justify">
          The Mock Placement event is designed to equip engineering participants
          for successful careers by offering a comprehensive preparation
          experience. It encompasses panel discussions, talk sessions, and
          activities covering diverse aspects of the placement process. The
          event also incorporates a proctored aptitude stage for assessing
          logical reasoning and problem-solving abilities, essential in
          engineering roles. Additionally, participants undergo a technical
          interview and an HR round, mirroring the actual placement process. A
          standout feature is the feedback and recommendation system, providing
          personalized insights into performance, highlighting strengths, and
          pinpointing areas for improvement, invaluable for enhancing skills and
          boosting chances of success in real placements.
        </p>
      </section>
      <section className="p-7">
        <div className="flex gap-1 w-full items-center justify-center p-8">
          <h1 className="font-extrabold text-2xl whitespace-nowrap">Why</h1>
          <p className="text-[#EDBB0A] font-extrabold text-2xl whitespace-nowrap">
            Mock Placement ?
          </p>
        </div>
        <div className="flex justify-center gap-5 flex-wrap">
          <FeatureSquare
            icon="/skill.svg"
            heading="Skill Refinement"
            content="A controlled environment to practice and hone specific skills relevant to  build proficiency and confidence before entering real-world scenarios."
          />
          <FeatureSquare
            icon="/safe.svg"
            heading="Safe Learning Space"
            content="Participants can make mistakes and learn from them without facing real consequences. "
          />
          <FeatureSquare
            icon="/soft.svg"
            heading="Soft Skill Development"
            content="Emphasize the development of soft skills such as communication, teamwork, adaptability, and problem-solving etc.."
          />
          <FeatureSquare
            icon="/industry.svg"
            heading="Industry Insights"
            content="Participants gain a realistic understanding of the industry's intricacies, work culture, and expectations."
          />
          <FeatureSquare
            icon="/time.svg"
            heading="Time Efficiency"
            content="Allowing participants to fast-track their understanding of real-world work dynamics and reducing the learning curve during actual placements."
          />
          <FeatureSquare
            icon="/constructive.svg"
            heading="Constructive Feedback"
            content="Mock placements often include feedback sessions, where a panel will provide insightful guidance. "
          />
        </div>
      </section>
      <h1 className="font-extrabold text-2xl whitespace-nowrap text-center p-10">
        Events
      </h1>
      <div className="flex flex-col">
        <EventSection
          image="/hrvshr.svg"
          heading="HR: Prep for Success"
          content="This event is formulated to delve into the intricacies of HR interviews and receive invaluable insights. Discover proven tips, tricks, and strategies tailored to boost your interview skills and bolster your confidence. Join us for this transformative experience and kickstart your journey towards interview excellence, ensuring a strong foundation as you step into the professional world."
        />
        <EventSection
          image="/panel.svg"
          heading="Panel Discussion"
          content="Join our enlightening panel discussion on 'Will AI Replace Humans?' as we explore the future of work in the AI era. Our experts from AI, tech, ethics, and HR will share insights into how AI impacts jobs and society. This event will be streamed live on YouTube, ensuring a global audience. We'll demystify AI's capabilities and limitations while highlighting its potential to enhance human creativity and innovation. Don't miss this engaging conversation that delves into the coexistence of AI and humanity. Tune in to gain valuable insights into the evolving relationship between AI and the workforce."
        />
        <EventSection
          image="/linkedin.svg"
          heading="Linkedin: The Powerful Tool"
          content="Join 'LinkedIn: The Powerful Tool' for recent college graduates to supercharge their career.  Learn to create an impressive profile, excel in CV building, networking and personal branding. Attend this valuable session to uncover the strategies for utilizing LinkedIn to kickstart your professional journey."
        />
        <EventSection
          image="/ai.svg"
          heading="AI the Future, Careers, Opportunites"
          content="Join our informative talk session on AI's expansive role in reshaping careers and job prospects. Our expert speakers will guide you on integrating AI into your skillset and navigating the AI job market for a world of opportunities."
        />
        {/* <EventSection image="/skillSection.svg" heading="And That’s how I realised my skill" content="A panel discussion on the topic  &quot;Will AI Replace Human Beings?&quot; as part of our mock placement event. This engaging session will feature a diverse panel of experts who will share their insights on the impact of AI and automation on various industries. The event will be broadcasted live on YouTube and other social media platforms to encourage a broader audience to join the conversation." /> */}
        <EventSection
          image="/gear.svg"
          heading="Gear Up"
          content='"Gear Up" is a comprehensive event equipping participants for career success. It covers topics such as the development of essential soft skills, the importance of networking, effective time management and productivity strategies. Join us to ensure you &apos;re well-prepared for your future career endeavours.'
        />
        <EventSection
          image="/careerpaths.svg"
          heading="Career Kickstart: Freelancing and Internships"
          content='Discover the advantages of freelancing, including flexibility and skill development, while learning how to create an appealing freelance portfolio. Gain insights into securing internships that align with your career goals and find out how to balance freelance work with internships effectively. Network with professionals, seek mentorship, and hear success stories to inspire your journey. This session equips students and recent graduates with essential knowledge and practical strategies for a successful start to their careers.'
        />
        <EventSection
          image="/career.svg"
          heading="Master's Abroad: The road map"
          content="A crucial event for prospective international master's degree candidates. It covers the significance of pursuing a master's degree, details the application process, discusses financing options including loans and scholarships, and provides guidance on post-master's career strategies. Attendees will gain insights into the value of a master's degree, receive application process guidance, explore financing avenues, and receive strategic advice for their careers after completing their Master's."
        />
        <section className="even:bg-white odd:bg-[#E9E9E9] flex odd:flex-row even:flex-row-reverse p-10 gap-10 items-center flex-wrap md:flex-nowrap">
          <img src="/mockplace.svg" alt="" />
          <div className="flex flex-col gap-5 items-start">
            <h1 className="font-extrabold text-2xl whitespace-nowrap text-center">
              The Mock Placement
            </h1>
            <p>
              Mock Placement is an event designed to help participants in their
              engineering career journey. We provide insight into on-campus
              placements. Our event includes a proctored aptitude test,
              technical interview, and HR round. The main attraction is our
              feedback and recommendation system, evaluating candidates&apos;
              performance and offers skill enhancement tips.
            </p>
            <div className="flex gap-5">
              {/* <Button buttontext="Leaderboard" buttoncolor="#EDBB0A" buttonAction={()=>{router.push('/leaderboard')}}/> */}
              {/* <Button buttontext="View Details" buttoncolor="#EDBB0A" buttonAction={()=>{router.push('/mockplacement')}}/> */}
            </div>
          </div>
        </section>
      </div>
      <section className="p-7">
        <h1 className="font-extrabold text-2xl whitespace-nowrap text-center p-10">
          FAQs
        </h1>
        <div className="flex flex-col gap-5">
          <FAQ
            question="What is the purpose and objective of this mock placements event?"
            answer="The purpose and objective of this event is to simulate a real job interview or hiring process to help participants practice and improve their interview skills and increase their chances of success in actual job placements."
          />
          <FAQ
            question="How will participating in this event benefit my job placement prospects?"
            answer="The event will help in boosting your interview skills, bolstering your self-assurance, and offering constructive feedback, thus helping you understand your strengths and weaknesses."
          />
          <FAQ
            question="Who will be conducting the mock interviews, and what is their background or expertise?"
            answer="The interview will be conducted by working professionals who have adequate knowledge and experience."
          />
          <FAQ
            question="Can you explain the format of the mock interviews and related activities?"
            answer="Our event includes an aptitude stage, technical interview, and an HR round, with a unique feedback and recommendation system."
          />
          <FAQ
            question="Will there be feedback and evaluation provided after the mock interviews?"
            answer="Yes. Our event has a feedback and performance assessment system which offers insights into candidates' strengths, weaknesses, and skill enhancement opportunities."
          />
          <FAQ
            question="Are there any specific industries or companies that will be simulated during the event?"
            answer="No, the interview will be conducted by working professionals from different companies ."
          />
          <FAQ
            question="Is there a registration or participation fee for this event?"
            answer="No"
          />
          <FAQ
            question="How do I prepare for the mock placements, and what resources are available?"
            answer="To prepare for mock placements, research the interview types, practice with peers, review technical skills, and utilize resources like career services, online guides, and professional networking."
          />
          <FAQ
            question="Will there be opportunities for networking with professionals from the industry?"
            answer="Yes, this will be a great opportunity to connect and learn from experienced professionals from the industry"
          />
          <FAQ
            question="Can you provide details about the schedule and logistics of the event, including dates and locations?"
            answer="The interviews will be conducted in online mode so that students can attend the interview from the current locations. The sessions and panel discussions will also be mostly conducted via online mode."
          />
        </div>
      </section>

      <section className="md:py-5 md:px-10 px-7 pb-10 flex flex-col items-center">
        <div className="flex items-center gap-5">
          {/* <Link href="/" className="rounded-full bg-[#EDBB0A] p-3 flex items-center justify-center"><FontAwesomeIcon icon={faArrowLeft} className='h-[20px]'/></Link> */}
          <div className="flex py-4">
            <p className="text-[#EDBB0A] font-extrabold text-2xl whitespace-nowrap">
              Tracks
            </p>
          </div>
        </div>

        <table>
          <tr className="even:bg-white odd:bg-[#E9E9E9]">
            <th className="p-5 text-left">Features</th>
            <th className="p-5 text-left">
              <h1>Track 1</h1>
              <p className="font-light text-sm ">Open to All</p>
            </th>
            <th className="p-5 text-left">
              <h1>Track 2</h1>
              <p className="font-light text-sm ">
                Exclusively for 3rd and 4th years
              </p>
            </th>
          </tr>
          <tr className="even:bg-white odd:bg-[#E9E9E9]">
            <td className="p-5">Talk Sessions</td>
            <td className="p-5 text-center">
              <FontAwesomeIcon icon={faCheck} className="h-[20px]" />
            </td>
            <td className="p-5 text-center">
              <FontAwesomeIcon icon={faCheck} className="h-[20px]" />
            </td>
          </tr>
          <tr className="even:bg-white odd:bg-[#E9E9E9]">
            <td className="p-5">Panel Discussion</td>
            <td className="p-5 text-center">
              <FontAwesomeIcon icon={faCheck} className="h-[20px]" />
            </td>
            <td className="p-5 text-center">
              <FontAwesomeIcon icon={faCheck} className="h-[20px]" />
            </td>
          </tr>
          <tr className="even:bg-white odd:bg-[#E9E9E9]">
            <td className="p-5">
              <h1>Mock Placement Drive</h1>
              <p>
                Including 3 rounds - Aptitude, Technical Interview and HR
                Interview
              </p>
            </td>
            <td className="p-5 text-center">
              <FontAwesomeIcon icon={faXmark} className="h-[20px]" />
            </td>
            <td className="p-5 text-center">
              <FontAwesomeIcon icon={faCheck} className="h-[20px]" />
            </td>
          </tr>
        </table>
      </section>

      <section className="md:py-5 md:px-10 px-7 pb-10">
        <div className="flex gap-1 w-full items-center justify-center p-8 flex-wrap">
          <h1 className=" font-extrabold text-2xl whitespace-nowrap">
            Story Behind
          </h1>
          <p className="text-[#EDBB0A] font-extrabold text-2xl whitespace-nowrap">
            Mock Placement
          </p>
        </div>
        <p className="text-sm tracking-wide">
          Mock Placement was a brainchild developed to address the lack of
          explanation or reasoning behind the rejection experienced by potential
          candidates in the placement screening process. It is our vision that
          all candidates should have an understanding of why they struck out and
          how to develop their overall skill set and be better equipped to face
          placements in the future. Our events are planned in such a way that
          our feedback and recommendation system will help you understand your
          strengths and weaknesses. We believe that instead of straight up
          rejections without any explanation as to why, it will be a better
          solution to explain to candidates why they were skipped over for
          someone else. This led to the development of Mock Placement and review
          systems.
        </p>
      </section>
    </>
  );
}
