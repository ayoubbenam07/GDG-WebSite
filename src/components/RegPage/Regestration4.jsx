import Default from "./Default.jsx"
import Design from "./Design.jsx";
import It from "./It.jsx";
import Event from "./Event.jsx";
import Relax from "./Relax.jsx";
import Hr from "./Hr.jsx";
import Marketing from "./Marketing.jsx";

function Regestration4({data, onChange, handleCheckBox}){
    let firstchoice = data.DepartmentRanking[0];
    return(
        <>
            <div className="RegestrationDev">
                <p className="self-start text-xl">Department questions</p>
                <p className="labelText">Share more details about your first choice by answering the questions below:</p>
                <Default/>
                {(firstchoice === "Design") && <Design data={data} onChange={onChange} handleCheckBox={handleCheckBox}/>}
                {firstchoice === "Event" && <Event data={data} onChange={onChange} handleCheckBox={handleCheckBox}/>}
                {firstchoice === "HR" && <Hr data={data} onChange={onChange}/>}
                {firstchoice === "IT" && <It data={data} onChange={onChange} handleCheckBox={handleCheckBox}/>}
                {firstchoice === "Marketing" && <Marketing data={data} onChange={onChange}/>}
                {firstchoice === "Relex" && <Relax data={data} onChange={onChange}/>}
            </div>
        </>             
    );
}

export default Regestration4