import { useRef } from "react";

function It(){
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
            <p className="self-start text-xl">IT</p>
            <form action="" className="flex flex-col justify-between w-full gap-2">
                <p className="labelText">Which tech topics are you most excited to learn or contribute to?</p>
                <div className="flex md:gap-40 md:flex-row flex-col">
                    <div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="WebDevelopment" className="checkBox"/>
                            <label for="WebDevelopment" className="labelText">Web Development</label>
                        </div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="Cybersecurity" className="checkBox"/>
                            <label for="Cybersecurity" className="labelText">Cybersecurity</label>
                        </div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="AI" className="checkBox"/>
                            <label for="AI" className="labelText">AI</label>
                        </div>
                    </div>
                    <div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="MobileDevelopment" className="checkBox"/>
                            <label for="MobileDevelopment" className="labelText">Mobile Development</label>
                        </div>
                        <div className="checkBoxContainer">
                            <input type="checkbox" value="Robotics" className="checkBox"/>
                            <label for="Robotics" className="labelText">Robotics</label>
                        </div>
                    </div>
                </div>
                <label required htmlFor="" className="labelText">Do you have experience in these topics? if yes, describe briefly.</label>
                <textarea ref={textarea1Ref} onInput={() => handleInput(textarea1Ref)} type="text" placeholder="Explain..." className="input"/><br />
                <label className="labelText">Upload links to your projects (Github, Kaggle, HackTheBox, TryHackMe, ...etc)</label>
                <textarea ref={textarea2Ref} onInput={() => handleInput(textarea2Ref)} type="text" className="bg-white rounded-[40px] px-8 py-6 text-3xl overflow-hidden"/>
                <p className="text-[#4285F3] text-md ">https://exampleofalink.com</p>
                <p className="text-[#4285F3] text-md">https://anotherexampleofalink.com</p><br />
                <p className="labelText">Suppose we have an event in 2 months requiring a website, app, challenge or a system. Would you be able to contribute?</p>
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

export default It;