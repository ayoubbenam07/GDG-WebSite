import { lazy, Suspense } from "react";
import Default from "./Default.jsx"

function Regestration4({choice}){
    let SelectedComponent;
switch (choice) {
    case 1:
    SelectedComponent = lazy(() => import("./Design.jsx"));
    break;
    case 2:
    SelectedComponent = lazy(() => import("./Event.jsx"));
    break;
    case 3:
    SelectedComponent = lazy(() => import("./Hr.jsx"));
    break;
    case 4:
    SelectedComponent = lazy(() => import("./It.jsx"));
    break;
    case 5:
    SelectedComponent = lazy(() => import("./Marketing.jsx"));
    break;
    case 6:
    SelectedComponent = lazy(() => import("./Relax.jsx"));
    break;
    default:
    SelectedComponent = lazy(() => import("./Design.jsx"));
}
    return(
        <>
            <div className="RegestrationDev">
                <p className="self-start text-xl">Department questions</p>
                <p className="labelText">Share more details about your first choice by answering the questions below:</p>
                <Default />
                <Suspense fallback={<div>Loading...</div>}>
                    {SelectedComponent ? <SelectedComponent /> : <div>Not Found</div>}
                </Suspense>
            </div>
        </>             
    );
}

export default Regestration4