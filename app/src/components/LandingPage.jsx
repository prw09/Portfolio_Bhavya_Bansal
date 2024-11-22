import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage(){
    return (
        <div className="w-full h-screen bg-zinc-900 pt-1">
            <div className="textstructure mt-40 px-20">
                {["The CTO", "AT PERSIST", "VENTURES"].map((item, index) => (
                    <div className="masker">
                        <div className="w-fit flex items-end overflow-hidden">
                            {index === 1 && (
                                <div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-red-500"> </div>
                            )}
                            <h1 className="flex items-center uppercase text-[7.5vw] h-full leading-[7vw] font-['Founders_Grotesk_X-Condensed'] font-medium">
                                 {item}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
                {["For public and private companies", "Building tech"].map((item, index) => (
                    <p key={index}
                           className="text-md font-light tracking-tight leading-none">
                            {item}
                    </p>
                ))}
                <div className="start flex items-center gap-5">
                    <div className="px-5 py-2 border-[2px] border-zinc-400 font-light text-md uppercase rounded-full">
                        Start Building
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full ">
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