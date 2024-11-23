import React from 'react';

function Card() {
    return (
        <div className="cards w-full h-screen bg-zinc-100 flex items-center px-32 gap-5">
            <div className="card-container h-[60vh] w-1/2">
                <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt=""/>
                    <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-5 transition-all duration-300 ease-in-out group-hover:bg-white group-hover:text-black">&copy;2019-2022</button>
                </div>
            </div>
            <div className="card-container flex gap-5 w-2/3 h-[60vh]">
                <div className="card relative rounded-xl w-full h-full bg-[#212121] flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt=""/>
                    <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-5 text-white">
                        RATING 5.0 ON CLUTCH
                    </button>
                </div>
                <div className="card relative rounded-xl w-full h-full bg-[#212121] flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className="w-1/2 h-[20 vbh njh]" alt=""/>
                    <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-5 text-white">
                        BUSINESS BOOTCAMP
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
