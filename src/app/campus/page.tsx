'use client'
import { useRouter } from 'next/navigation'

export default function Campus(){
    const router = useRouter()
    router.push('https://empty-toque-418.notion.site/MOCK-PLACEMENT-b7a1461b58a8430a8a7ed8cce33e6a85')
    return(
        <div className="flex flex-col gap-5 items-center justify-center w-screen h-screen">
            <p className="text-xl font-semibold">Redirecting..</p>
        </div>
    )
}