import React from 'react';

function About() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed = "-.5" className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-[#212121]">
            <h1 className="font-['Neue_Montreal'] text-[5vw] leading-[5.5vw] font-normal">
                We are on mission to make the world a better place
                through scaling projects with friends and partners
            </h1>
            <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
                <div className="w-1/2">
                    <h1 className="text-7xl">
                        Our approach :
                    </h1>
                    <button
                        className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white transition-transform duration-300 ease-in-out group hover:scale-105">
                        Read More
                        <div className="w-3 h-3 bg-zinc-100 rounded-full transition-all duration-300 ease-in-out group-hover:w-0 group-hover:h-0 group-hover:border-t-[6px] group-hover:border-t-transparent group-hover:border-l-[10px] group-hover:border-l-zinc-100 group-hover:border-b-[6px] group-hover:border-b-transparent group-hover:translate-x-3"></div>
                    </button>

                </div>
                <div className="w-1/2 h-[80vh] rounded-3xl sticky">
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default About;