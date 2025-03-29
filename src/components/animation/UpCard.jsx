"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"

export default function UpCard({children}){

    const card = useRef(null)

    useEffect(()=>{
        gsap.from(card.current, { 
            opacity:0,
            y: 200, 
            duration: 0.7
          });
    },[])


    return(
        <div ref={card} className="h-7/8 w-full fixed bottom-0 px-6 rounded-t-4xl bg-white"> 
            {children}
        </div>
    )
}