import { useRef } from "react";
import Stepper from "./Stepper";

function Relax(){
    let rank = 1;
    const textarea1Ref = useRef(null);
    const textarea2Ref = useRef(null);
    const handleInput = (ref) => {
    const textarea = ref.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px"; 
    };
    return(
        <>
        <div className="form">
            <p className="self-start text-xl">Relax</p>
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
                <Stepper steps={["1", "2", "3", "4", "5"]} isGrey={false}/><br />
                <p className="labelText">Rate your French skills out of 5.</p>
                <Stepper steps={["1", "2", "3", "4", "5"]} isGrey={false}/><br />
                <p className="labelText">Rate your English skills out of 5.</p>
                <Stepper steps={["1", "2", "3", "4", "5"]} isGrey={false}/><br />
                <label required htmlFor="" className="labelText">Imagine an important event is coming up, but our attempts to contact sponsors online or by phone don’t work. Would you be willing to visit company offices in person to secure sponsorships?  If yes, explain how you would approach the situation to make sure the event still succeeds.</label>
                <textarea ref={textarea1Ref} onInput={() => handleInput(textarea1Ref)} type="text" placeholder="Explain..." className="input"/><br />
            </form>
            <div className="rank">rank <span className="text-[#E94335]">#{rank}</span></div>
        </div>
        </>
    );
}

export default Relax;