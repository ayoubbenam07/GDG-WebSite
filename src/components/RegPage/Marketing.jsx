import { useRef } from "react";

function Marketing(){
    let rank = 1;
    const textarea1Ref = useRef(null);
    const textarea2Ref = useRef(null);
    const handleInput = (ref) => {
    const textarea = ref.current;
    textarea.style.height = "auto"; // reset height
    textarea.style.height = textarea.scrollHeight + "px"; // expand
    };
    return(
        <>
        <div className="form">
            <p className="self-start text-xl">Marketing</p>
            <form id="RegestrationForm" className="flex flex-col justify-between gap-2">
                <label required htmlFor="" className="labelText">Do you have experience in social media management, promotion, branding, or marketing? talk about it.</label>
                <textarea ref={textarea1Ref} onInput={() => handleInput(textarea1Ref)} type="text" placeholder="Explain..." className="input"/><br />
                <label required htmlFor="" className="labelText">Imagine we have an event happening next 2 week, but our posts on social media aren’t getting much attention (very few likes, comments, or shares). As part of the marketing team, what would you do to improve engagement and attract more people?</label>
                <textarea ref={textarea2Ref} onInput={() => handleInput(textarea2Ref)}  type="text" placeholder="Explain..." className="input"/>
            </form>
            <div className="rank">rank <span className="text-[#E94335]">#{rank}</span></div>
        </div>
        </>
    );
}

export default Marketing;