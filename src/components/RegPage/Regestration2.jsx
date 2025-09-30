import { useRef, useState, useEffect } from "react";
import Stepper from "./Stepper";

function Regestration2({data, onChange}){
    const textarea1Ref = useRef(null);
    const textarea2Ref = useRef(null);
    const handleInput = (ref) => {
    const textarea = ref.current;
    textarea.style.height = "auto"; // reset height
    textarea.style.height = textarea.scrollHeight + "px"; // expand
    };
    const [selectedStep, setselectedStep] = useState(() => {
        const saved = localStorage.getItem('selectedStep');
        return saved ? JSON.parse(saved) : 0;
    }); 
    
    // Save to localStorage whenever selectedStep changes
    useEffect(() => {
        localStorage.setItem('selectedStep', JSON.stringify(selectedStep));
    }, [selectedStep]);
    useEffect(() => {
    if (data && selectedStep !== 0) {
        data.TimeCommitment = selectedStep;
    }
    }, [selectedStep, data]);   
    return(
        <>
            <div className="RegestrationDev">
                <p className="self-start text-xl">Motivation & Commitment</p>
                <div className="flex flex-col justify-between gap-2 w-full">
                <label htmlFor="Q1" className="labelText">Why do you want to join GDG On Campus ENSIA?</label>
                <textarea required name="Q1" ref={textarea1Ref} value={data.Motivation} onChange={(e) => onChange("Motivation", e.target.value)} onInput={() => handleInput(textarea1Ref)} type="text" placeholder="Explain your motivation..." className="inputGrey"/><br />
                <label htmlFor="Q2" className="labelText">What do you expect to gain from this experience?</label>
                <textarea required name="Q2" ref={textarea2Ref} value={data.Expectations} onInput={() => handleInput(textarea2Ref)} onChange={(e) => onChange("Expectations", e.target.value)}  type="text" placeholder="Explain your expectations..." className="inputGrey"/><br />
                <label htmlFor="" className="labelText">How much time can you dedicate weekly to club activities?</label>
                <Stepper steps={["2H", "4H", "6H", "8H", "10H"]} selectedStep={selectedStep} setselectedStep={setselectedStep} isGrey={true}/><br />
                </div>
            </div>
        </>             
    );
}

export default Regestration2