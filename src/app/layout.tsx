import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Script from 'next/script'

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
            <div className='w-[100vw] bg-[#1E1E1E] flex px-5 justify-between items-center h-[60px] z-20'>
              <img src="/mockplacement-yellow.svg" alt="" className='h-[25px]'/>
              <div className='text-white flex gap-5'>
                  <button className=''>
                    <FontAwesomeIcon icon={faBars} className='h-[20px]'/>
                  </button>                       
              </div>
            </div>            
        </div>
        {children}
      </body>
    </html>
  )
}
