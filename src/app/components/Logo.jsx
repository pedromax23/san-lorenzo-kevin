import Image from "next/image";


function Logo() {
    return (
        <div className="fixed flex justify-center items-center h-screen w-full">

            <Image
                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/image/sanlorenzo.png"
                alt="Next.js Logo"
                width={480}
                height={37}
                priority
            />
        </div>
    )
}

export default Logo