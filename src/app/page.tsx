'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/Button.component'
import { useRouter } from 'next/navigation'
import FeatureSquare from '@/components/FeatureSquare'
import EventSection from '@/components/EventSection'
import FAQ from '@/components/FAQ'

export default function Home(){
  const firstSection = {
    height: 'calc(100vh - 90px - 17vh)'
  }
  const router = useRouter()
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
        <section className='flex flex-col gap-10 w-full px-5 items-center justify-center' style={firstSection}>
              <div className='flex items-center gap-6 text-sm font-medium'>
                <img src="/SB Black.svg" alt="" className='sm:h-[50px] h-[23px]'/>
                In Collaboration with
                <img src="/YP_black.svg" alt="" className='sm:h-[50px] h-[23px]'/>
              </div>
              <img src="/mockplacement-yellow.svg" alt="" className='lg:w-[42%] md:w-[62%] w-[80%]'/>
              <p className='text-3xl font-bold'>FUTURE IS KNOCKING</p>

              <Button buttontext="Register" buttoncolor="#EDBB0A" buttonAction={()=>{router.push('/register')}}/>
        </section>
        <section className='bg-[#1E1E1E] md:py-5 md:px-10 p-7'>
          <div className='flex gap-1 w-full items-center justify-center p-8'>
            <h1 className=' font-extrabold text-2xl text-white whitespace-nowrap'>What is</h1>
            <p className='text-[#EDBB0A] font-extrabold text-2xl whitespace-nowrap'>Mock Placement ?</p>
          </div>
          <p className='text-white text-sm tracking-wide'>Mock Placement is an event designed to guide and support participants in their journey to steady careers in engineering. We aspire to introduce all the participants to the various aspects of on-campus placements, along with the wide and varied scopes and opportunities available to them if they decide to pursue other options. Our events consist of a proctored aptitude stage to assess a candidate’s logical reasoning and problem-solving skills, followed by a technical interview and an HR round. The main attraction of our event will be our feedback and recommendation system, which will assess the overall performance of the candidate and provide insights about their strengths, weaknesses, and how to improve on various aspects of their skills.</p>
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
          <EventSection image="/hrvshr.svg" heading="HR VS HR Interview" content="This exceptional event serves as a prelude, where seasoned interviewers will interview each other, providing a fascinating glimpse into the world of HR assessments. They'll generously exchange CVs and meticulously replicate all interview procedures, granting you a comprehensive understanding of the process. Throughout, they will expertly showcase the essential skills required for successful interviews. Towards the end, they will deliver insightful analyses of each other's performances, diligently highlighting strengths and engaging in constructive conversations about strategies to minimize potential mistakes." />
          <EventSection image="/panel.svg" heading="Panel Discussion" content="Join our enlightening panel discussion on 'Will AI Replace Humans?' as we explore the future of work in the AI era. Our experts from AI, tech, ethics, and HR will share insights into how AI impacts jobs and society. This event will be streamed live on YouTube, ensuring a global audience. We'll demystify AI's capabilities and limitations while highlighting its potential to enhance human creativity and innovation. Don't miss this engaging conversation that delves into the coexistence of AI and humanity. Tune in to gain valuable insights into the evolving relationship between AI and the workforce." />
          <EventSection image="/linkedin.svg" heading="Linkedin: The powerful Tool" content="Join 'LinkedIn: The Powerful Tool' to supercharge your career. This event is designed for recent college graduates, offering valuable insights into the world of professional networking and the transformative potential of LinkedIn. Learn how to create a standout LinkedIn profile, even with limited experience. Discover the essentials of CV building, effective networking, and personal branding. Attend this invaluable opportunity to kickstart your professional journey with LinkedIn. Gain the skills and confidence needed to navigate the professional landscape with a powerful tool at your disposal." />
          <EventSection image="/ai.svg" heading="AI the future, Careers, opportunites" content="Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities." />
          <section className='even:bg-white odd:bg-[#E9E9E9] flex odd:flex-row even:flex-row-reverse p-10 gap-10 items-center flex-wrap md:flex-nowrap'>
            <img src="/mockplace.svg" alt="" />
            <div className='flex flex-col gap-5 items-start'>
              <h1 className='font-extrabold text-2xl whitespace-nowrap text-center'>The Mock Placement</h1>
              <p>A panel discussion on the topic  &quot;Will AI Replace Human Beings?&quot; as part of our mock placement event. This engaging session will feature a diverse panel of experts who will share their insights on the impact of AI and automation on various industries. The event will be broadcasted live on YouTube and other social media platforms to encourage a broader audience to join the conversation.</p>
              <div className='flex gap-5'>
                <Button buttontext="Leaderboard" buttoncolor="#FFFFFF" buttonAction={()=>{router.push('/leaderboard')}}/>
                <Button buttontext="View Details" buttoncolor="#EDBB0A" buttonAction={()=>{router.push('/mockplacement')}}/>
              </div>
              
            </div>
          </section>
        </div>
        <section className='p-7'>
          <h1 className='font-extrabold text-2xl whitespace-nowrap text-center p-10'>FAQs</h1>
          <div className='flex flex-col gap-5'>
            <FAQ question="What is the purpose and objective of this mock placements event?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
            <FAQ question="What is the purpose and objective of this mock placements event?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
            <FAQ question="What is the purpose and objective of this mock placements event?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
            <FAQ question="What is the purpose and objective of this mock placements event?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
            <FAQ question="What is the purpose and objective of this mock placements event?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
            <FAQ question="What is the purpose and objective of this mock placements event?" answer='Explore the expansive aspects of AI in this informative talk session. This event is your gateway to understanding how Artificial Intelligence (AI) is reshaping careers and job prospects. Join us to uncover the potential of AI in various industries and how it can benefit your career. Learn how to integrate AI into your skillset and discover the exciting job roles it opens up. Our expert speakers will offer practical insights and guidance on navigating the AI-driven job market. This is your chance to grasp how AI can be the key to unlocking a world of career opportunities.'/>
          </div>
        </section>

        <section className='md:py-5 md:px-10 px-7'>
          <div className='flex gap-1 w-full items-center justify-center p-8 flex-wrap'>
            <h1 className=' font-extrabold text-2xl whitespace-nowrap'>Story Behind</h1>
            <p className='text-[#EDBB0A] font-extrabold text-2xl whitespace-nowrap'>Mock Placement</p>
          </div>
          <p className='text-sm tracking-wide'>Mock Placement was a brainchild developed to address the lack of explanation or reasoning behind the rejection experienced by potential candidates in the placement screening process. It is our vision that all candidates should have an understanding of why they struck out and how to develop their overall skill set and be better equipped to face placements in the future. Our events are planned in such a way that our feedback and recommendation system will help you understand your strengths and weaknesses. We believe that instead of straight up rejections without any explanation as to why, it will be a better solution to explain to candidates why they were skipped over for someone else. This led to the development of Mock Placement and review systems.</p>
        </section>
      </div>
        
    )
}