import { useState } from "react";
import Footer from "./components/Footer/Footer.jsx"
import Regestration2 from "./components/RegPage/Regestration2.jsx"
import Regestration4 from "./components/RegPage/Regestration4.jsx"


export default function RegestrationPage(){
    const [step, setStep] = useState(0);
    const nextStep = () => setStep((prev) => (prev + 1) % 4);
    const prevStep = () => setStep((prev) => (prev - 1) % 4);
    let DepChoice = 1;
    const components = {
    0: Regestration2,
    1: Regestration2,
    2: Regestration2,
    3: Regestration4,
    };
    const SelectedComponent = components[step];
    return(
        <div className="relative flex flex-col">
            <div className="bg-[#B8EEF8] w-full h-[35vh] abs z-0">

            </div>
            <div className="RegestrationContainer">
                {SelectedComponent && (
                    step === 3
                    ? <SelectedComponent choice={DepChoice} />
                    : <SelectedComponent />
                )}
                <div className="slider">
                    <button onClick={prevStep} className={step === 0 ? "hidden" : ""}><img src="\icons\GDG-left.svg" alt="" /></button>
                    <button className={step === 0 ? "circleBlue" : "circle"} onClick={() => setStep(0)}></button>
                    <button className={step === 1 ? "circleBlue" : "circle"} onClick={() => setStep(1)}></button>
                    <button className={step === 2 ? "circleBlue" : "circle"} onClick={() => setStep(2)}></button>
                    <button className={step === 3 ? "circleBlue" : "circle"} onClick={() => setStep(3)}></button>
                    <button onClick={nextStep} className={step === 3 ? "hidden" : ""}><img src="\icons\GDG-right.svg" alt=""/></button>
                </div>
                <button form="RegestrationForm" type="submit" className={step != 3 ? "hidden" : "rounded-full self-center bg-black text-white text-md px-12 py-2"}>Submit</button>
            </div>
            <Footer />
        </div>
    );
}