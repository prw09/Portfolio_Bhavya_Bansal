import React, {useEffect, useState} from 'react';

function Playful() {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    });

        return (
        <div className="eyes w-full h-screen overflow-hidden">
            <div data-scroll data-scroll-speed="-.7"  className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
                <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        <div className="relative flex items-center justify-center w-2/3 h-2/3 rounded-full bg-[#212121] cursor-pointer">
                            <span className="absolute uppercase text-white font-medium text-xl">Play</span>
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}}
                                 className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10">
                                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        <div
                            className="relative flex items-center justify-center w-2/3 h-2/3 rounded-full bg-[#212121] cursor-pointer">
                            <span className="absolute uppercase text-white font-medium text-xl">Play</span>
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}}
                                 className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10">
                                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        )
}

export default Playful;