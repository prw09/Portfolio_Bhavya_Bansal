import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import {motion} from "framer-motion";

function LandingPage(){

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3"  className="w-full h-screen bg-[#f1f1f1] pt-1">
            <div className="textstructure mt-40 px-8">
                {["LEADING CTO", "PERSIST", "VENTURES"].map((item, index) => (
                    <div className="masker">
                        <div className="w-fit flex items-end overflow-hidden font-['Founders_Grotesk_X-Condensed']">
                            {index === 1 && (
                                <motion.div initial={{width: 0}} animate={{width:"8vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                                            className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8v7VsUGypgvxfulVRB3n1VwEZ483sp2TH_g&s" alt=""/>
                                </motion.div>
                            )}
                            <h1 className="flex items-center uppercase text-[7.5vw] h-full leading-[7vw] font-medium">
                                 {item}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
                {["For public and private companies", "Building tech"].map((item, index) => (
                    <p key={index} className="text-md font-light leading-none">
                        {item}
                    </p>
                ))}
                <div className="start flex items-center gap-5">
                    <div className="px-5 py-2 border-[2px] border-zinc-400 font-light text-md uppercase rounded-full cursor-pointer">
                        Start Building
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full cursor-pointer">
                        <span className="rotate-[45deg]">
                            <FaArrowUpLong/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;