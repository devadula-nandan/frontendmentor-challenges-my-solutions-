import Challenge_1 from "./challenge_1/mockups/nvjjyhvhqfwnjseojdgg.png"
import Challenge_2 from "./challenge_2/mockups/design/desktop-design.jpg"
import Challenge_3 from "./challenge_3/mockups/design/desktop-design.jpg"
import Challenge_4 from "./challenge_4/mockups/design/desktop-design.jpg"
import Challenge_5 from "./challenge_5/mockups/design/desktop-design.jpg"
import { useNavigate } from "react-router-dom";
export const Welcome = () => {
    const navigate = useNavigate()
    return (
        <div className="w-screen h-screen bg-slate-200">
            <h1 className=" text-center font-semibold text-3xl md:text-6xl py-12">Frontend mentor challenges</h1>
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
                        <div className=" rounded-lg overflow-hidden bg-green-300 transition-all cursor-pointer shadow-sm hover:shadow-lg" onClick={() => { navigate("./challenge_1") }}>
                            <img src={Challenge_1} alt="not loaded" className="w-full" />
                            <h1 className="p-3 text-center text-2xl">Password Generator</h1>
                        </div>
                        
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
                        <div className=" rounded-lg overflow-hidden bg-purple-900 transition-all cursor-pointer shadow-sm hover:shadow-lg" onClick={() => { navigate("./challenge_2") }}>
                            <img src={Challenge_2} alt="not loaded" className="w-full" />
                            <h1 className="p-3 text-center text-white text-2xl">Interactive card details form</h1>
                        </div>
                        
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
                        <div className=" rounded-lg overflow-hidden bg-teal-500 transition-all cursor-pointer shadow-sm hover:shadow-lg" onClick={() => { navigate("./challenge_3") }}>
                            <img src={Challenge_3} alt="not loaded" className="w-full" />
                            <h1 className="p-3 text-center text-white text-2xl">Single price grid component</h1>
                        </div>
                        
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
                        <div className=" rounded-lg overflow-hidden bg-[#ec775f] transition-all cursor-pointer shadow-sm hover:shadow-lg" onClick={() => { navigate("./challenge_4") }}>
                            <img src={Challenge_4} alt="not loaded" className="w-full" />
                            <h1 className="p-3 text-center text-white text-2xl">Expenses chart component</h1>
                        </div>
                        
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
                        <div className=" rounded-lg overflow-hidden bg-slate-900 transition-all cursor-pointer shadow-sm hover:shadow-lg" onClick={() => { navigate("./challenge_5") }}>
                            <img src={Challenge_5} alt="not loaded" className="w-full" />
                            <h1 className="p-3 text-center text-white text-2xl">Fylo data storage component</h1>
                        </div>
                        
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">

                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">

                    </div>

                </div>
            </div>
        </div>
    )
}