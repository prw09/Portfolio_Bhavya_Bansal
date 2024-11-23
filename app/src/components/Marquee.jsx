import React from 'react';
import {motion} from "framer-motion";

function Marquee() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] text-white">
            <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
                <motion.h1
                    initial={{x: "0"}}
                    animate={{x: "-100%"}}
                    transition={{repeat: Infinity, ease: "linear", duration: 5}}
                    className="text-[20vw] leading-none font-['Founders_Grotesk_X-Condesnsed'] uppercase font-semibold pt-5 -mb-[7vw] pr-20">Building Tech</motion.h1>
                <motion.h1
                    initial={{x: "0"}}
                    animate={{x: "-100%"}}
                    transition={{repeat: Infinity, ease: "linear", duration: 5}}
                    className="text-[20vw] leading-none font-['Founders_Grotesk_X-Condesnsed'] uppercase font-semibold pt-5 -mb-[7vw] pr-20">Building Tech</motion.h1>
                <motion.h1 initial={{x: 0 }} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5 }} className="text-[20vw] leading-none font-['Founders_Grotesk_X-Condesnsed'] uppercase font-semibold pt-5 mb-5">Building Tech</motion.h1>
            </div>
        </div>
    )
}

export default Marquee;