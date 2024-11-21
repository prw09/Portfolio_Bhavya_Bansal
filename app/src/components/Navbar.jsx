import React from "react";

const Navbar = () => {
    return (

        <main className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
            <logo className="flex flex-col items-start">
                <h3 className="text-4xl font-extrabold text-black tracking-tight leading-tight">
                    Bhavya
                </h3>
                <h4 className="text-lg font-medium text-gray-600 tracking-wide">
                    bansal
                </h4>
            </logo>
            <links className="flex gap-10">
                {["Services", "Our Work", "About Me","Insights", "Contact"].map((item, index) => (
                    <a key={index} className={`text-lg capitalize font-light ${
                        index === 4 && "ml-32"
                    }`}>{item}</a>
                ))}
            </links>
        </main>

    )
}

export default Navbar;