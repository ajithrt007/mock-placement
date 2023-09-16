'use client'
import Link from 'next/link'
import Button from '@/components/Button.component'
import { useRouter } from 'next/navigation'
import FeatureSquare from '@/components/FeatureSquare'
import EventSection from '@/components/EventSection'
import FAQ from '@/components/FAQ'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home(){
  const firstSection = {
    height: 'calc(100vh - 60px - 17vh)'
  }

  const router = useRouter()
    return(
      <>
        <section className='flex flex-col gap-10 w-full px-5 items-center justify-center' style={firstSection}>
              <div className='flex items-center gap-6 text-sm font-medium'>
              <Link href="https://ieeesctsb.org/"><img src="/SB Black.svg" alt="" className='sm:h-[50px] h-[23px]'/></Link>
                In Collaboration with
                <Link href="https://yp.ieeekerala.org/"><img src="/YP_black.svg" alt="" className='sm:h-[50px] h-[23px]'/></Link>
              </div>
              <img src="/mockplacement-yellow.svg" alt="" className='lg:w-[42%] md:w-[62%] w-[80%]'/>
              <p className='text-3xl font-bold'>FUTURE IS KNOCKING</p>

              <p className="py-2 px-5 rounded-[10px] bg-[#EDBB0A] tracking-wide">Registration Opening Soon</p>
              {/* <Button buttontext="Register" buttoncolor="#EDBB0A" buttonAction={()=>{router.push('/register')}}/> */}
              {/* <a href="https://nextjs.org/docs/app/api-reference/functions/redirect" className="py-2 px-5 rounded-[10px] bg-[#EDBB0A] tracking-wide" target="_blank" rel="noopener noreferrer">Register</a> */}
        </section>
        <section className='bg-[#1E1E1E] md:py-5 md:px-10 p-7'>
          <div className='flex gap-1 w-full items-center justify-center p-8'>
            <h1 className=' font-extrabold text-2xl text-white whitespace-nowrap'>What is</h1>
            <p className='text-[#EDBB0A] font-extrabold text-2xl whitespace-nowrap'>Mock Placement ?</p>
          </div>
          <p className='text-white text-sm tracking-wide pb-7 text-justify'>Mock Placement is a event tailored to prepare participants for successful careers in engineering. The event aims to provide participants with a holistic understanding of on-campus placements through various activities. These include panel discussions and talk sessions, which likely cover a wide range of topics related to the placement process.

It also includes a proctored aptitude stage which allows the assessment of candidates&apos; logical reasoning and problem-solving abilities, which are crucial skills in any engineering role. Following this, the incorporation of a technical interview and an HR round mirrors the actual placement process, giving participants a realistic experience and a chance to showcase their technical expertise and interpersonal skills.

The standout feature of the event is the feedback and recommendation system. This system appears to be a powerful tool in providing candidates with personalized insights into their performance. It not only highlights their strengths but also identifies areas for improvement, which is invaluable for candidates seeking to enhance their skills and increase their chances of success in actual placement process.</p>
        </section>
        <section className='p-7'>
          <div className='flex gap-1 w-full items-center justify-center p-8'>
            <h1 className='font-extrabold text-2xl whitespace-nowrap'>Why</h1>
            <p className='text-[#EDBB0A] font-extrabold text-2xl whitespace-nowrap'>Mock Placement ?</p>
          </div>
          <div className='flex justify-center gap-5 flex-wrap'>
            <FeatureSquare icon="/skill.svg" heading="Skill Refinement" content="A controlled environment to practice and hone specific skills relevant to  build proficiency and confidence before entering real-world scenarios."/>
            <FeatureSquare icon="/safe.svg" heading="Safe Learning Space" content="Participants can make mistakes and learn from them without facing real consequences. "/>
            <FeatureSquare icon="/soft.svg" heading="Soft Skill Development" content="Emphasize the development of soft skills such as communication, teamwork, adaptability, and problem-solving etc.."/>
            <FeatureSquare icon="/industry.svg" heading="Industry Insights" content="Participants gain a realistic understanding of the industry's intricacies, work culture, and expectations."/>
            <FeatureSquare icon="/time.svg" heading="Time Efficiency" content="Allowing participants to fast-track their understanding of real-world work dynamics and reducing the learning curve during actual placements."/>
            <FeatureSquare icon="/constructive.svg" heading="Constructive Feedback" content="Mock placements often include feedback sessions, where a panel will provide insightful guidance. "/>
          </div>
        </section>
        <h1 className='font-extrabold text-2xl whitespace-nowrap text-center p-10'>Events</h1>
        <div className='flex flex-col'>
          <EventSection image="/hrvshr.svg" heading="HR: Prep for Success" content="This event is formulated to delve into the intricacies of HR interviews and receive invaluable insights. Discover proven tips, tricks, and strategies tailored to boost your interview skills and bolster your confidence. Join us for this transformative experience and kickstart your journey towards interview excellence, ensuring a strong foundation as you step into the professional world." />
          <EventSection image="/panel.svg" heading="Panel Discussion" content="Join our enlightening panel discussion on 'Will AI Replace Humans?' as we explore the future of work in the AI era. Our experts from AI, tech, ethics, and HR will share insights into how AI impacts jobs and society. This event will be streamed live on YouTube, ensuring a global audience. We'll demystify AI's capabilities and limitations while highlighting its potential to enhance human creativity and innovation. Don't miss this engaging conversation that delves into the coexistence of AI and humanity. Tune in to gain valuable insights into the evolving relationship between AI and the workforce." />
          <EventSection image="/linkedin.svg" heading="Linkedin: The powerful Tool" content="Join 'LinkedIn: The Powerful Tool' for recent college graduates to supercharge their career.  Learn to create an impressive profile, excel in CV building, networking and personal branding. Attend this valuable session to uncover the strategies for utilizing LinkedIn to kickstart your professional journey." />
          <EventSection image="/ai.svg" heading="AI the future, Careers, opportunites" content="Join our informative talk session on AI's expansive role in reshaping careers and job prospects. Our expert speakers will guide you on integrating AI into your skillset and navigating the AI job market for a world of opportunities." />
          {/* <EventSection image="/skillSection.svg" heading="And That’s how I realised my skill" content="A panel discussion on the topic  &quot;Will AI Replace Human Beings?&quot; as part of our mock placement event. This engaging session will feature a diverse panel of experts who will share their insights on the impact of AI and automation on various industries. The event will be broadcasted live on YouTube and other social media platforms to encourage a broader audience to join the conversation." /> */}
          <EventSection image="/gear.svg" heading="Gear Up" content="&quot;Gear Up&quot; is a comprehensive event equipping participants for career success. It covers topics such as the development of essential soft skills, the importance of networking, effective time management and productivity strategies. Join us to ensure you &apos;re well-prepared for your future career endeavours." />
          <EventSection image="/career.svg" heading="Master's Abroad: The road map" content="A crucial event for prospective international master's degree candidates. It covers the significance of pursuing a master's degree, details the application process, discusses financing options including loans and scholarships, and provides guidance on post-master's career strategies. Attendees will gain insights into the value of a master's degree, receive application process guidance, explore financing avenues, and receive strategic advice for their careers after completing their Master's." />
          <section className='even:bg-white odd:bg-[#E9E9E9] flex odd:flex-row even:flex-row-reverse p-10 gap-10 items-center flex-wrap md:flex-nowrap'>
            <img src="/mockplace.svg" alt="" />
            <div className='flex flex-col gap-5 items-start'>
              <h1 className='font-extrabold text-2xl whitespace-nowrap text-center'>The Mock Placement</h1>
              <p>Mock Placement is an event designed to help participants in their engineering career journey. We provide insight into on-campus placements. Our event includes a proctored aptitude test, technical interview, and HR round. The main attraction is our feedback and recommendation system, evaluating candidates&apos; performance and offers skill enhancement tips.</p>
              <div className='flex gap-5'>
                {/* <Button buttontext="Leaderboard" buttoncolor="#EDBB0A" buttonAction={()=>{router.push('/leaderboard')}}/> */}
                {/* <Button buttontext="View Details" buttoncolor="#EDBB0A" buttonAction={()=>{router.push('/mockplacement')}}/> */}
              </div>
              
            </div>
          </section>
        </div>
        <section className='p-7'>
          <h1 className='font-extrabold text-2xl whitespace-nowrap text-center p-10'>FAQs</h1>
          <div className='flex flex-col gap-5'>
            <FAQ question="What is the purpose and objective of this mock placements event?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
            <FAQ question="How will participating in this event benefit my job placement prospects?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
            <FAQ question="Who will be conducting the mock interviews, and what is their background or expertise?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
            <FAQ question="Can you explain the format of the mock interviews and related activities?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
            <FAQ question="Will there be feedback and evaluation provided after the mock interviews?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
            <FAQ question="Are there any specific industries or companies that will be simulated during the event?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
            <FAQ question="Is there a registration or participation fee for this event?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
            <FAQ question="How do I prepare for the mock placements, and what resources are available?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
            <FAQ question="Will there be opportunities for networking with professionals from the industry?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
            <FAQ question="Can you provide details about the schedule and logistics of the event, including dates and locations?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
          </div>
        </section>

        <section className='md:py-5 md:px-10 px-7 pb-10'>
          <div className='flex gap-1 w-full items-center justify-center p-8 flex-wrap'>
            <h1 className=' font-extrabold text-2xl whitespace-nowrap'>Story Behind</h1>
            <p className='text-[#EDBB0A] font-extrabold text-2xl whitespace-nowrap'>Mock Placement</p>
          </div>
          <p className='text-sm tracking-wide'>Mock Placement was a brainchild developed to address the lack of explanation or reasoning behind the rejection experienced by potential candidates in the placement screening process. It is our vision that all candidates should have an understanding of why they struck out and how to develop their overall skill set and be better equipped to face placements in the future. Our events are planned in such a way that our feedback and recommendation system will help you understand your strengths and weaknesses. We believe that instead of straight up rejections without any explanation as to why, it will be a better solution to explain to candidates why they were skipped over for someone else. This led to the development of Mock Placement and review systems.</p>
        </section>
      </>
        
    )
}