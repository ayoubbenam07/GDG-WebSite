import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer.jsx"
import Regestration1 from "./components/RegPage/Regestration1/Regestration1.jsx";
import Regestration2 from "./components/RegPage/Regestration2.jsx"
import Regestration3 from "./components/RegPage/Regestration3/Regestration3.jsx";
import Regestration4 from "./components/RegPage/Regestration4.jsx"
import Regestration5 from "./components/RegPage/Regestration5.jsx";

export default function RegestrationPage(){
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem('multiInputFormData');
        return savedData ? JSON.parse(savedData) : 
        {
        FirstName: "",
        LastName: "",
        PhoneNumber: "",
        Email: "",
        School: "",
        AcademicLevel: "",
        Motivation: "",
        Expectations: "",
        DepartmentRanking: [],
        TimeCommitment: "",
        Q1: "",
        Q2: "", 
        Q3: "", 
        Q4: "",
        Q5: "",
        };
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    useEffect(() => {
        localStorage.setItem('multiInputFormData', JSON.stringify(formData));
    }, [formData]);     
    const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    };
    const handleCheckboxChange = (field, value, checked) => {
        setFormData((prev) => {
            let updated = { ...prev };

            if (field.includes(".")) {
            const [parent, child] = field.split(".");
            let current = updated[parent][child] || [];

            if (checked) {
                // add if not already in array
                if (!current.includes(value)) {
                current = [...current, value];
                }
            } else {
                // remove if unchecked
                current = current.filter((v) => v !== value);
            }

            updated[parent] = { ...updated[parent], [child]: current };
            } else {
            let current = updated[field] || [];

            if (checked) {
                if (!current.includes(value)) {
                current = [...current, value];
                }
            } else {
                current = current.filter((v) => v !== value);
            }

            updated[field] = current;
            }

            return updated;
        });
        };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!validateSubmit()) return;
        const data = {
        FirstName: formData.FirstName,
        LastName: formData.LastName,
        PhoneNumber: formData.PhoneNumber,
        Email: formData.Email,
        School: formData.School,
        AcademicLevel: formData.AcademicLevel,
        Motivation: formData.Motivation,
        Expectations: formData.Expectations,
        DepartmentRanking: formData.DepartmentRanking, // array will be joined in Apps Script
        TimeCommitment: formData.TimeCommitment,
        Q1: formData.Q1,
        Q2: formData.Q2,
        Q3: formData.Q3,
        Q4: formData.Q4,
        Q5: formData.Q5,
        };
        try {
        /*await fetch("https://script.google.com/macros/s/AKfycbwg8eE6OBJX_PShnoSj27ovURmFRhOZX7k7PF34S66_Ddojy1i7vQGapXKZrKiN-DpBDA/exec", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "Content-Type": "application/json",
            },
        });*/
        setIsSubmitted(true);
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    };

    const [error, setError] = useState("");

    const validateStep1 = () => {
    if (!formData.FirstName || !formData.Email || !formData.LastName) {
    setError(
    "It looks like you didn’t complete all the required fields. Please make sure to enter All required fields."
    );
    return false;
    }
    setError(""); // clear error if valid
    return true;
    }
    const validateStep2 = () => {
    if (!formData.Motivation || !formData.Expectations || !formData.TimeCommitment) {
    setError(
    "It looks like you didn’t complete all the required fields. Please make sure to enter All required fields."
    );
    return false;
    }
    setError(""); // clear error if valid
    return true;
    }
    const validateStep3 = () => {
    if (!formData.DepartmentRanking[0]) {
    setError(
    "It looks like you didn’t complete all the required fields. Please make sure to enter All required fields."
    );
    return false;
    }
    setError(""); // clear error if valid
    return true;
    }
    const validateSubmit = () => {
    if(formData.DepartmentRanking[0] === "Relex")
    {    
        if (!formData.Q1 || !formData.Q2 || !formData.Q3 || !formData.Q4 || !formData.Q5) {
        setError(
            "It looks like you didn’t complete all the required fields. Please make sure to enter All required fields."
        );
        return false;
    }}
    if(formData.DepartmentRanking[0] === "HR" || formData.DepartmentRanking[0] === "Event")
    {    
        if (!formData.Q1 || !formData.Q2 || !formData.Q3) {
        setError(
            "It looks like you didn’t complete all the required fields. Please make sure to enter All required fields."
        );
        return false;
    }}
    if(formData.DepartmentRanking[0] === "Design" || formData.DepartmentRanking[0] === "IT")
    {    
        if (!formData.Q1 || !formData.Q2 || !formData.Q3 || !formData.Q4) {
        setError(
            "It looks like you didn’t complete all the required fields. Please make sure to enter All required fields."
        );
        return false;
    }}
    setError(""); // clear error if valid
    return true;
    }
    const nextStep = () => {
    if (step === 0 && !validateStep1()) return; 
    if (step === 1 && !validateStep2()) return; 
    if (step === 2 && !validateStep3()) return; 
    setStep(step + 1);
    };
    const prevStep = () => {
    if (step > 0) {
    setError("");       // clear error when going back
    setStep(step - 1);  // go to previous step
    }
    };
    return(

        <div className="relative">
            <div className="bg-[#B8EEF8] w-full absolute top-0 left-0 z-0 p-6 md:p-12 font-pt">
                <div className="text-xl mb-5 rounded-md border-2 md:border-4 bg-[#4285F3] w-fit mt-0 px-6 md:px-30 py-1 flex justify-center items-center">Join us !</div>
                <p className="text-lg mb-20">Register now to learn, connect and build amazing projects.</p>
                <div className="flex flex-col w-fit absolute top-0 right-0">
                    <div className="flex">
                        <div className="w-12 lg:w-25 h-12 lg:h-25 bg-white"></div>
                        <div className="w-12 lg:w-25 h-12 lg:h-25 border-2 border-white"></div>
                        <div className="w-12 lg:w-25 h-12 lg:h-25 bg-[#4285F3] border-2 border-white"></div>
                        <div className="w-12 lg:w-25 h-12 lg:h-25 bg-[#4285F3] border-2 border-white"></div>
                    </div>
                    <div className="self-end w-12 lg:w-25 h-12 lg:h-25 bg-[#4285F3] border-2 border-white"></div>
                </div>
            </div>
            {isSubmitted === false &&
            <form onSubmit={handleSubmit} id="RegestrationForm">
            <div className="bg-white relative z-50 top-52 md:top-70 flex flex-col shadow-[0px_0px_24px_0px_#00000040] rounded-[60px] mb-100 px-7 md:px-25 pt-15 md:pt-25 pb-10 md:pb-20 w-full md:w-9/10 max-w-[1200px] gap-8 md:gap-10 mx-auto ">
                {step === 0 && <Regestration1 data={formData} onChange={handleChange}/>}
                {step === 1 && <Regestration2 data={formData} onChange={handleChange}/>}
                {step === 2 && <Regestration3 data={formData} onChange={handleChange}/>}
                {step === 3 && <Regestration4 data={formData} onChange={handleChange} handleCheckBox={handleCheckboxChange}/>}
                {(error !== "") && (
                    <div style={{ marginTop: "15px", padding: "10px", background: "#ffe6e6", borderRadius: "6px" }}>
                        <p className="text-center text-sm" style={{ color: "red", lineHeight: "1.5"}}>{error}</p>
                    </div>
                )}
                <div className="slider">
                    <button type="button" onClick={prevStep} className={step === 0 ? "hidden" : "cursor-pointer"}><img src="\icons\GDG-left.svg" alt="" /></button>
                    <button type="button" className={step === 0 ? "circleBlue" : "circle"} onClick={() => setStep(0)}></button>
                    <button type="button" className={step === 1 ? "circleBlue" : "circle"} onClick={() => setStep(1)}></button>
                    <button type="button" className={step === 2 ? "circleBlue" : "circle"} onClick={() => setStep(2)}></button>
                    <button type="button" className={step === 3 ? "circleBlue" : "circle"} onClick={() => setStep(3)}></button>
                    <button type="button" onClick={nextStep} className={step === 3 ? "hidden" : "cursor-pointer"}><img src="\icons\GDG-right.svg" alt=""/></button>
                </div>
                <button form="RegestrationForm" type="submit" className={step != 3 ? "hidden" : "rounded-full self-center bg-black text-white text-md px-12 py-2"}>Submit</button>
            </div>
            </form>
            }
            {isSubmitted === true && <Regestration5 />}
            <Footer />
        </div>
    );
}