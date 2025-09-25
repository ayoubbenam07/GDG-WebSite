import { useRef } from "react";

function Design(){
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
            <form action="" className="flex flex-col justify-between w-full gap-2">
                <p className="labelText">Which tools have you used for design?</p>
                <div className="flex md:gap-40 md:flex-row flex-col">
                    <div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="Adobeillustration" className="checkBox"/>
                            <label for="Adobeillustration" className="labelText">Adobe illustration</label>
                        </div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="AdobePhotoshop" className="checkBox"/>
                            <label for="AdobePhotoshop" className="labelText">Adobe Photoshop</label>
                        </div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="Canva" className="checkBox"/>
                            <label for="Canva" className="labelText">Canva</label>
                        </div>
                    </div>
                    <div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="Figma" className="checkBox"/>
                            <label for="Figma" className="labelText">Figma</label>
                        </div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="Other" className="checkBox"/>
                            <label for="Other" className="labelText">Other</label>
                        </div>
                    </div>
                </div>
                <label required htmlFor="" className="labelText">Briefly describe your experience in design.</label>
                <textarea ref={textarea1Ref} onInput={() => handleInput(textarea1Ref)} type="text" placeholder="Explain..." className="input"/><br />
                <label className="labelText">Upload samples of your past designs (optional)</label>
                <textarea ref={textarea2Ref} onInput={() => handleInput(textarea2Ref)} type="text" className="bg-white rounded-[40px] px-8 py-6 text-3xl overflow-hidden"/>
                <p className="text-[#4285F3] text-md ">https://exampleofalink.com</p>
                <p className="text-[#4285F3] text-md">https://anotherexampleofalink.com</p><br />
                <p className="labelText">Can you handle all visual assets for an event on your own if needed?</p>
                <div className="flex items-center justify-between w-8/10">
                    <label required htmlFor="" className="labelText flex items-center gap-5">
                    <input type="radio" name="Q4" value="Yes" className="checkBox"/>Yes
                    </label>
                    <label required htmlFor="" className="labelText flex items-center gap-5">
                    <input type="radio" name="Q4" value="Maybe" className="checkBox"/>Maybe
                    </label>
                    <label required htmlFor="" className="labelText flex items-center gap-5">
                    <input type="radio" name="Q4" value="No" className="checkBox"/>No
                    </label>
                </div>
                <br />
            </form>
            <div className="rank">rank <span className="text-[#E94335]">#{rank}</span></div>
        </div>
        </>
    );
}

export default Design;