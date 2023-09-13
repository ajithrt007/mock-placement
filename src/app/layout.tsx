import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faGlobe } from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Script from 'next/script'
import Button from '@/components/Button.component'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: 'Mock Placement by IEEE SCT SB ',
  description: 'Mock Placement is a flagship event conducted by IEEE SCT SB and IEEE YP Kerala Section which introduces all the participants to the various aspects of on-campus placements, along with the wide and varied scopes and opportunities available to them if they decide to pursue other options.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-K6ZT06DY6P" />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-K6ZT06DY6P');
`,
        }}
      />


      <div className="sticky top-0 z-10">
          <div className='text-sm tracking-wide bg-[#EDBB0A] flex items-center h-[30px]'>
            Deadline to Register: 16th September 2023
          </div>
            <div className='w-full bg-[#1E1E1E] flex px-5 justify-between items-center h-[60px] z-20'>
              <img src="/mockplacement-yellow.svg" alt="" className='h-[25px]'/>
              <div className='text-white flex gap-5'>
                  <button className=''>
                    <FontAwesomeIcon icon={faBars} className='h-[20px]'/>
                  </button>                       
              </div>
            </div>            
        </div>
        {children}
        <div className='w-full bg-[#1E1E1E] flex md:px-10 px-7 py-16 gap-3 flex-wrap md:flex-nowrap justify-between' >
          <div className='flex flex-col items-start gap-3'>
            <img src="/mockplacement-yellow.svg" alt="" className='h-[25px]'/>
            <p className='text-white text-sm tracking-wide'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            </p>
            <a href="https://nextjs.org/docs/app/api-reference/functions/redirect" className="py-2 px-3 rounded-[10px] bg-black text-[#E9E9E9] text-xs tracking-wide" target="_blank" rel="noopener noreferrer">Feedback Form</a>
          </div>

          <div className='flex flex-col items-start gap-3'>
            <h1 className='text-lg font-bold text-[#EDBB0A]'>IEEE SCT SB</h1>
            <p className='text-[#E9E9E9] text-sm tracking-wide'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            </p>
            <div className='flex gap-2'>
              <a href="https://www.instagram.com/ieeesctsb/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className='text-white hover:text-[#E9E9E9]'/></a>
              <a href="https://ieeesctsb.org/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} className='text-white hover:text-[#E9E9E9]'/></a>
              <a href="https://www.linkedin.com/company/ieeesctsb/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className='text-white hover:text-[#E9E9E9]'/></a>
            </div>
          </div>

          <div className='flex flex-col items-start gap-3'>
            <h1 className='text-lg font-bold text-[#EDBB0A]'>IEEE YP KS</h1>
            <p className='text-[#E9E9E9] text-sm tracking-wide'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            </p>
            <div className='flex gap-2'>
              <a href="https://www.instagram.com/ieeekeralayp/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className='text-white hover:text-[#E9E9E9]'/></a>
              <a href="https://yp.ieeekerala.org/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} className='text-white hover:text-[#E9E9E9]'/></a>
              <a href="https://www.linkedin.com/company/ieee-kerala-young-professionals/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className='text-white hover:text-[#E9E9E9]'/></a>
            </div>
          </div>
        </div>
        <div className='border-t-2 text-white flex justify-center items-center bottom-0 bg-[#1E1E1E] w-full p-3 text-sm gap-1 '>Queries? Contact <a href="mailto:mockplacement2023@gmail.com" className='underline-offset-1 text-blue-600'>mockplacement2023@gmail.com</a></div> 
      </body>
    </html>
  )
}
