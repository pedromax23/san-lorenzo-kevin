import Image from "next/image"

function Cuervo() {
    return (
        <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert top-0 hidden sm:block"
            src="/image/cuervo.png"
            width={627}
            height={120}
            priority
        />
    )
}

export default Cuervo