import { useRef, useState, useEffect } from "react";
import Stepper from "./Stepper";

function Relax({data, onChange}){
    let rank = 1;
    const textarea1Ref = useRef(null);
    const textarea2Ref = useRef(null);
    const handleInput = (ref) => {
    const textarea = ref.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px"; 
    };
    
    // State 1 - Communication skills
    const [selectedStep1, setselectedStep1] = useState(() => {
        const saved1 = localStorage.getItem('selectedStep1');
        return saved1 ? JSON.parse(saved1) : 0;
    });
    
    // State 2 - French skills
    const [selectedStep2, setselectedStep2] = useState(() => {
        const saved2 = localStorage.getItem('selectedStep2');
        return saved2 ? JSON.parse(saved2) : 0;
    });
    
    // State 3 - English skills
    const [selectedStep3, setselectedStep3] = useState(() => {
        const saved3 = localStorage.getItem('selectedStep3');
        return saved3 ? JSON.parse(saved3) : 0;
    });
    
    // Save selectedStep1 to localStorage
    useEffect(() => {
        localStorage.setItem('selectedStep1', JSON.stringify(selectedStep1));
    }, [selectedStep1]);
    
    // Save selectedStep2 to localStorage
    useEffect(() => {
        localStorage.setItem('selectedStep2', JSON.stringify(selectedStep2));
    }, [selectedStep2]);
    
    // Save selectedStep3 to localStorage
    useEffect(() => {
        localStorage.setItem('selectedStep3', JSON.stringify(selectedStep3));
    }, [selectedStep3]);
    
    // Update data object with all step values
    useEffect(() => {
        if (data) {
            if (selectedStep1 !== 0) data.Q2 = selectedStep1;
            if (selectedStep2 !== 0) data.Q3 = selectedStep2;
            if (selectedStep3 !== 0) data.Q4 = selectedStep3;
        }
    }, [selectedStep1, selectedStep2, selectedStep3, data]);
    
    return(
        <>
        <div className="form">
            <p className="self-start text-xl">Relex</p>
            <form id="RegestrationForm" className="flex flex-col justify-between w-full gap-2">
                <p className="labelText">Do you have experience in reaching and communicating with companies or professionals?</p>
                <div className="flex items-center justify-between w-8/10">
                    <label required htmlFor="" className="labelText flex items-center gap-2 md:gap-5">
                    <input type="radio" name="Q4" value="Yes" className="checkBox"/>Yes
                    </label>
                    <label required htmlFor="" className="labelText flex items-center gap-2 md:gap-5">
                    <input type="radio" name="Q4" value="Maybe" className="checkBox"/>Somewhat
                    </label>
                    <label required htmlFor="" className="labelText flex items-center gap-2 md:gap-5">
                    <input type="radio" name="Q4" value="No" className="checkBox"/>No
                    </label>
                </div>
                <br />
                <p className="labelText">Rate your communication skills out of 5.</p>
                <Stepper steps={["1", "2", "3", "4", "5"]} selectedStep={selectedStep1} setselectedStep={setselectedStep1} isGrey={false}/><br />
                <p className="labelText">Rate your French skills out of 5.</p>
                <Stepper steps={["1", "2", "3", "4", "5"]} selectedStep={selectedStep2} setselectedStep={setselectedStep2} isGrey={false}/><br />
                <p className="labelText">Rate your English skills out of 5.</p>
                <Stepper steps={["1", "2", "3", "4", "5"]} selectedStep={selectedStep3} setselectedStep={setselectedStep3} isGrey={false}/><br />
                <label required htmlFor="" className="labelText">Imagine an important event is coming up, but our attempts to contact sponsors online or by phone don't work. Would you be willing to visit company offices in person to secure sponsorships?  If yes, explain how you would approach the situation to make sure the event still succeeds.</label>
                <textarea value={data.Q5} onChange={(e) => onChange("Q5", e.target.value)} ref={textarea1Ref} onInput={() => handleInput(textarea1Ref)} type="text" placeholder="Explain..." className="input"/><br />
            </form>
            <div className="rank">rank <span className="text-[#E94335]">#{rank}</span></div>
        </div>
        </>
    );
}

export default Relax;