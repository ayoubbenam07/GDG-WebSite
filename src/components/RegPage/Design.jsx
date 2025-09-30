import { useRef } from "react";

function Design({data, onChange, handleCheckBox}){
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
            <p className="self-start text-xl">Design</p>
            <div id="RegestrationForm" className="flex flex-col justify-between w-full gap-2">
                <p className="labelText">Which tools have you used for design?</p>
                <div className="flex md:gap-40 md:flex-row flex-col">
                    <div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="Adobeillustration" className="checkBox" checked={data.Q1?.includes("Adobeillustration")} onChange={(e) => handleCheckBox("Q1", e.target.value, e.target.checked)}/>
                            <label for="Adobeillustration" className="labelText">Adobe illustration</label>
                        </div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="AdobePhotoshop" className="checkBox" checked={data.Q1?.includes("AdobePhotoshop")} onChange={(e) => handleCheckBox("Q1", e.target.value, e.target.checked)}/>
                            <label for="AdobePhotoshop" className="labelText">Adobe Photoshop</label>
                        </div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="Canva" className="checkBox" checked={data.Q1?.includes("Canva")} onChange={(e) => handleCheckBox("Q1", e.target.value, e.target.checked)}/>
                            <label for="Canva" className="labelText">Canva</label>
                        </div>
                    </div>
                    <div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="Figma" className="checkBox" checked={data.Q1?.includes("Figma")} onChange={(e) => handleCheckBox("Q1", e.target.value, e.target.checked)}/>
                            <label for="Figma" className="labelText">Figma</label>
                        </div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="Other" className="checkBox" checked={data.Q1?.includes("Other")} onChange={(e) => handleCheckBox("Q1", e.target.value, e.target.checked)}/>
                            <label for="Other" className="labelText">Other</label>
                        </div>
                    </div>
                </div>
                <label required htmlFor="" className="labelText">Briefly describe your experience in design.</label>
                <textarea ref={textarea1Ref} onInput={() => handleInput(textarea1Ref)} value={data.Q2} onChange={(e) => onChange("Q2", e.target.value)} type="text" placeholder="Explain..." className="input"/><br />
                <label className="labelText">Upload samples of your past designs (optional)</label>
                <textarea ref={textarea2Ref} onInput={() => handleInput(textarea2Ref)} value={data.Q3} onChange={(e) => onChange("Q3", e.target.value)}  type="text" className="bg-white rounded-[20px] md:rounded-[40px] px-6 md:px-8 py-4 md:py-6 text-md overflow-hidden"/>
                <p className="text-[#4285F3] text-md ">https://exampleofalink.com</p>
                <p className="text-[#4285F3] text-md">https://anotherexampleofalink.com</p><br />
                <p className="labelText">Can you handle all visual assets for an event on your own if needed?</p>
                <div className="flex items-center justify-between w-8/10">
                    <label required htmlFor="" className="labelText flex items-center gap-5">
                    <input type="radio" name="Q4" value="Yes" className="checkBox" checked={data.Q4 === "Yes"} onChange={(e) => onChange("Q4", e.target.value)}/>Yes
                    </label>
                    <label required htmlFor="" className="labelText flex items-center gap-5">
                    <input type="radio" name="Q4" value="Maybe" className="checkBox" checked={data.Q4 === "Maybe"} onChange={(e) => onChange("Q4", e.target.value)}/>Maybe
                    </label>
                    <label required htmlFor="" className="labelText flex items-center gap-5">
                    <input type="radio" name="Q4" value="No" className="checkBox" checked={data.Q4 === "No"} onChange={(e) => onChange("Q4", e.target.value)}/>No
                    </label>
                </div>
                <br />
            </div>
            <div className="rank">rank <span className="text-[#E94335]">#{rank}</span></div>
        </div>
        </>
    );
}

export default Design;