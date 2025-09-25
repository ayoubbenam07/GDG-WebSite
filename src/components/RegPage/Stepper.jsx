import React, { useState } from "react";

function Stepper({steps}) {
  // const steps = [2, 4, 6, 8, 10]; // step options
    const [selectedStep, setselectedStep] = useState(steps[0]);

    return (
    <div style={{ width: "100%", maxWidth: "500px", margin: "0px auto"}}>
      {/* Stepper container */}
        <div style={{ position: "relative", height: "80px" }}>
        {/* Base line (gray) */}
        <div
            style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "100%",
            height: "12px", // thicker base line
            background: "#ffffff",
            borderRadius: "6px",
            transform: "translateY(-50%)", // centers line with circles
            zIndex: 1,
            
            }}
        ></div>

        {/* Active line (blue) */}
        <div
            style={{
            position: "absolute",
            top: "50%",
            left: 0,
            height: "12px",
            background: "#4285F3",
            width: `${
              (steps.indexOf(selectedStep) / (steps.length - 1)) * 100
            }%`,
            transition: "width 0.3s ease-in-out",
            borderRadius: "6px",
            transform: "translateY(-50%)",
            zIndex: 1,
            }}
        ></div>

        {/* Circles */}
        <div
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: 0,
            width: "100%",
            transform: "translateY(-50%)", // align circles with bar
            zIndex: 2,
            
            }}
        >
            {steps.map((step, index) => {
            const isActive = index <= steps.indexOf(selectedStep);
            return (
                <div
                key={step}
                onClick={() => setselectedStep(step)}
                style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: isActive ? "#4285F3" : "#ffffff",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontSize: "14px",
                    fontWeight: "bold",
                    zIndex: 2,
                }}
                >
                {/* {step} */}
                </div>
            );
            })}
        </div>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            maxWidth: "500px",
            textAlign: "center",
            paddingLeft: "7px",
            
            transform: "translateY(-50%)", // align circles with bar
            zIndex: 2,
            fontSize: "16px",
            color: "#737373"
            }}>
            {steps.map((step) => {
                return (
                    
                        <div>{step}</div>
                    
                )
            })}
        </div>
        </div>
        </div>
    );
}

export default Stepper;