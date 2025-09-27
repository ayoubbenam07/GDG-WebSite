import { useRef } from "react";
import Stepper from "./Stepper";

function Regestration2(){
    const textarea1Ref = useRef(null);
    const textarea2Ref = useRef(null);
    const handleInput = (ref) => {
    const textarea = ref.current;
    textarea.style.height = "auto"; // reset height
    textarea.style.height = textarea.scrollHeight + "px"; // expand
    };
    return(
        <>
            <div className="RegestrationDev">
                <p className="self-start text-xl">Motivation & Commitment</p>
                <form id="RegestrationForm" className="flex flex-col justify-between gap-2 w-full">
                <label htmlFor="Q1" className="labelText">Why do you want to join GDG On Campus ENSIA?</label>
                <textarea required name="Q1" ref={textarea1Ref} onInput={() => handleInput(textarea1Ref)} type="text" placeholder="Explain your motivation..." className="inputGrey"/><br />
                <label htmlFor="Q2" className="labelText">What do you expect to gain from this experience?</label>
                <textarea required name="Q2" ref={textarea2Ref} onInput={() => handleInput(textarea2Ref)}  type="text" placeholder="Explain your expectations..." className="inputGrey"/><br />
                <label htmlFor="" className="labelText">How much time can you dedicate weekly to club activities?</label>
                <Stepper steps={["2H", "4H", "6H", "8H", "10H"]} isGrey={true}/><br />
                </form>
            </div>
        </>             
    );
}

export default Regestration2