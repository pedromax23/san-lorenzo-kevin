"use client"
import Image from "next/image";

function Logo() {

    return (
        <Image
            onClick={() => {alert('bostero hijo eterno')}}
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert z-10"
            src="/image/sanlorenzo.png"
            alt="Next.js Logo"
            width={480}
            height={37}
            priority
        />
    )
}

export default Logo