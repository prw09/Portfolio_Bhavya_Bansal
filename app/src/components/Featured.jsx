import React from 'react';

function Featured() {
    return (
        <div className="w-full py-20">
            <div className="w-full px-20 border-b-[1px] border-zinc-300 pb-20">
                <h1 className="text-5xl font-['Neue_Montreal'] tracking-tight">
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
                    <div className="card-container relative w-1/2  h-[80vh]">
                        <div
                            className="absolute text-[#CDEA68] left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tight text-8xl font-['Founders_Grotesk_X-Condensed']">
                            <div
                                className="absolute text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tight text-8xl font-['Founders_Grotesk_X-Condensed']">
                                {"VISE".split('').map((item, index) => (
                                    <span>{item}</span>
                                ))}
                            </div>
                        </div>
                        <div className="card w-full h-full rounded-lg overflow-hidden">
                            <img className="w-full h-full bg-cover"
                                 src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                                 alt=""/>
                        </div>
                    </div>
                    <div className="card-container relative w-1/2  h-[80vh]">
                        <div
                            className="absolute text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tight text-8xl font-['Founders_Grotesk_X-Condensed']">
                            {"VISE".split('').map((item, index) => (
                                <span>{item}</span>
                            ))}
                        </div>
                        <div className="w-full h-full rounded-lg overflow-hidden">
                            <img className="w-full h-full bg-cover"
                                 src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                                 alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured;