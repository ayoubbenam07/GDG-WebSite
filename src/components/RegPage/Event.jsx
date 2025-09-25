import { useRef } from "react";

function Event(){
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
            <p className="self-start text-xl">Event</p>
            <form action="" className="flex flex-col justify-between gap-2">
                <label required htmlFor="" className="labelText">Have you ever helped organize an event? If yes, describe your role.</label>
                <textarea ref={textarea1Ref} onInput={() => handleInput(textarea1Ref)} type="text" placeholder="Explain..." className="input"/><br />
                <p className="labelText">Are you familiar with planning, cost estimation, and logistics management?</p>
                <div className="flex gap-2 md:gap-4 ml-10 items-center mb-5">
                    <input type="checkbox" value="Planning" className="checkBox"/>
                    <label for="Planning" className="labelText">Planning</label>
                </div>
                <div className="flex gap-2 md:gap-4 ml-10 items-center mb-5">
                    <input type="checkbox" value="Costestimation" className="checkBox"/>
                    <label for="Costestimation" className="labelText">Cost estimation</label>
                </div>
                <div className="flex gap-2 md:gap-4 ml-10 items-center mb-5">
                    <input type="checkbox" value="Logisticsmanagement" className="checkBox"/>
                    <label for="Logisticsmanagement" className="labelText">Logistics management</label>
                </div>
                <br />
                <label required htmlFor="" className="labelText">For our event, we had arranged with a caterer to provide lunch. But on the morning of the event, the caterer suddenly cancels. How would you react to this problem, and what steps would you take to make sure participants still get lunch?</label>
                <textarea ref={textarea2Ref} onInput={() => handleInput(textarea2Ref)}  type="text" placeholder="Explain..." className="input"/><br />
            </form>
            <div className="rank">rank <span className="text-[#E94335]">#{rank}</span></div>
        </div>
        </>
    );
}

export default Event;