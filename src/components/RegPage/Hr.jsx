import { useRef } from "react";

function Hr(){
    let rank = 1;
    const textarea1Ref = useRef(null);
    const textarea2Ref = useRef(null);
    const textarea3Ref = useRef(null);
    const handleInput = (ref) => {
    const textarea = ref.current;
    textarea.style.height = "auto"; // reset height
    textarea.style.height = textarea.scrollHeight + "px"; // expand
    };
    return(
        <>
        <div className="form">
            <p className="self-start text-xl">HR</p>
            <form action="" className="flex flex-col justify-between gap-2">
                <label htmlFor="" className="labelText">What skills do you think are essential for people management?</label>
                <textarea required ref={textarea1Ref} onInput={() => handleInput(textarea1Ref)} type="text" placeholder="Explain..." className="input"/><br />
                <label htmlFor="" className="labelText">How would you help keep members motivated and engaged?</label>
                <textarea required ref={textarea2Ref} onInput={() => handleInput(textarea2Ref)}  type="text" placeholder="Explain..." className="input"/><br />
                <label htmlFor="" className="labelText">Let’s say you’re in charge of selecting teams in a hackathon. One of the applicants is your close friend, and you’re sure they would do a good job. But another applicant you don’t know has a stronger profile. You can only choose one. Who would you pick, and what’s your reasoning?</label>
                <textarea  required ref={textarea3Ref} onInput={() => handleInput(textarea3Ref)}  type="text" placeholder="Explain..." className="input"/><br />
            </form>
            <div className="rank">rank <span className="text-[#E94335]">#{rank}</span></div>
        </div>
        </>
    );
}

export default Hr;