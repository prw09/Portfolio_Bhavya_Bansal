import React from 'react';
import {motion, useAnimation} from "framer-motion";

function Featured() {

    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({y: "0"})
    }

    const handleHoverEnd = (index) => {
        cards[index].start({y: "100%"})
    }


    return (
        <div className="w-full py-20 bg-[#f1f1f1]">
            <div className="w-full px-20 border-b-[1px] border-zinc-300 pb-20">
                <h1 className="text-5xl font-['Neue_Montreal'] tracking-tight font-[2px]">
                    Featured Projects :
                </h1>
            </div>
            <div className="flex justify-center px-5">
                <div className="w-full flex gap-2 mt-5 -mb-8 font-[Founders Grotesk X-Condensed]">
                    <div className="w-4 h-4 mt-1 bg-zinc-900 rounded-full"></div>
                    FYDE
                </div>
                <div className="w-full flex gap-2 mt-5 -mb-6 font-[Founders Grotesk X-Condensed]">
                    <div className="w-4 h-4 mt-1 bg-zinc-900 rounded-full"></div>
                    VISE
                </div>
            </div>
            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="card-container relative w-1/2  h-[80vh]">
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tight text-8xl font-['Founders_Grotesk_X-Condensed']">
                                {"FYDE".split('').map((item, index) => (
                                    <motion.span initial={{y: "100%"}} animate={cards[0]}
                                                 transition={{ease: [0.22, 1, 0.36, 1], delay: index * .05}}
                                                 className="inline-block">{item}</motion.span>
                                ))}
                            </h1>
                            <div className="card w-full h-full rounded-lg overflow-hidden group relative">
                                <img
                                    className="w-full h-full bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
                                    src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                                    alt="Enlarged on Hover"
                                />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="card-container relative w-1/2  h-[80vh]">
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tight text-8xl font-['Founders_Grotesk_X-Condensed']">
                                {"VISE".split('').map((item, index) => (
                                    <motion.span
                                        initial={{y: "100%"}} animate={cards[1]}
                                        transition={{ease: [0.22, 1, 0.36, 1], delay: index * .05}}
                                        className="inline-block">{item}
                                    </motion.span>
                                ))}
                            </h1>

                            <div className="w-full h-full rounded-lg overflow-hidden group relative">
                                <img
                                    className="w-full h-full bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
                                    src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                                    alt="Enlarged on Hover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="px-5 flex gap-5 font-['Founders_Grotesk_X-Condensed']">
                <button
                    className="mt-3 flex justify-between items-center gap-3 px-4 py-2 border border-zinc-800 rounded-full font-sm font-sm tracking-normal leading-none hover:bg-zinc-800 hover:text-white transition">AUDIT
                </button>
                <button
                    className="mt-3 flex justify-between items-center gap-3 px-4 py-2 border border-zinc-800 rounded-full font-sm font-sm tracking-normal leading-none hover:bg-zinc-800 hover:text-white transition3">COPYWRITE
                </button>
                <button
                    className="mt-3 flex justify-between items-center gap-3 px-4 py-2 border border-zinc-800 rounded-full font-sm font-sm tracking-normal leading-none hover:bg-zinc-800 hover:text-white transition">DASHBOARDS
                </button>
                <button
                    className="mt-3 flex justify-between items-center gap-3 px-4 py-2 border border-zinc-800 rounded-full font-sm font-sm tracking-normal leading-none hover:bg-zinc-800 hover:text-white transitiona">DESIGN
                </button>
            </div>

            <div className="flex justify-center mt-5 px-5">
                <div className="w-full flex gap-2 mt-5 -mb-8 font-[Founders Grotesk X-Condensed]">
                    <div className="w-4 h-4 mt-1 bg-zinc-900 rounded-full uppercase"></div>
                    TRAWA
                </div>
                <div className="w-full flex gap-2 mt-5 -mb-6 font-[Founders Grotesk X-Condensed]">
                    <div className="w-4 h-4 mt-1 bg-zinc-900 rounded-full uppercase"></div>
                    PREMIUM BLEND
                </div>
            </div>
            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="card-container relative w-1/2  h-[80vh]">
                        <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tight text-8xl font-['Founders_Grotesk_X-Condensed']">
                            {"TRAWA".split('').map((item, index) => (
                                <motion.span initial={{y: "100%"}} animate={cards[0]}
                                             transition={{ease: [0.22, 1, 0.36, 1], delay: index * .05}}
                                             className="inline-block">{item}
                                </motion.span>
                            ))}
                        </h1>

                        <div className="card w-full h-full rounded-lg overflow-hidden group relative">
                            <img
                                className="w-full h-full bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
                                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
                                alt="Enlarged on Hover"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="card-container relative w-1/2  h-[80vh]">
                        <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tight text-8xl font-['Founders_Grotesk_X-Condensed']">
                            {"PREMIUM BLEND".split('').map((item, index) => (
                                <motion.span initial={{y: "100%"}} animate={cards[1]}
                                             transition={{ease: [0.22, 1, 0.36, 1], delay: index * .05}}
                                             className="inline-block">{item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="w-full h-full rounded-lg overflow-hidden group relative">
                            <img
                                className="w-full h-full bg-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
                                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
                                alt="Enlarged on Hover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="px-5 flex gap-5 font-['Founders_Grotesk_X-Condensed']">
                <button
                    className="mt-3 flex justify-between items-center gap-3 px-4 py-2 border border-zinc-800 rounded-full font-sm tracking-normal leading-none hover:bg-zinc-800 hover:text-white transition">BRAND
                    IDENTITY
                </button>
                <button
                    className="mt-3 flex justify-between items-center gap-3 px-4 py-2 border border-zinc-800 rounded-full font-sm tracking-normal leading-none hover:bg-zinc-800 hover:text-white transition3">DESIGN
                </button>
                <button
                    className="mt-3 flex justify-between items-center gap-3 px-4 py-2 border border-zinc-800 rounded-full font-sm tracking-normal leading-none hover:bg-zinc-800 hover:text-white transition3">INVESTORS
                </button>
            </div>

        </div>
    )
}

export default Featured;