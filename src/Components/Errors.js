import { useState } from "react";

function Errors() {
    const [refrenceError, setRefrenceError] = useState(false);
    const [typeError, setTypeError] = useState(false);
    const [fetchError, setFetchError] = useState(false);
    const [customError, setCustomError] = useState(false);
    const displayRefError = () => {
        setRefrenceError(true);
        setCustomError(false);
        setTypeError(false);
        setFetchError(false);
    }
    const displayTypeError = () => {
        setRefrenceError(false);
        setCustomError(false);
        setTypeError(true);
        setFetchError(false)
    }
    const displayFetchError = () => {
        setRefrenceError(false);
        setTypeError(false);
        setCustomError(false);
        setFetchError(true);
    }
    const displayCustomError = () => {
        setRefrenceError(false);
        setTypeError(false);
        setFetchError(false);
        setCustomError(true);
    }
    return (
        <>
            <h1 style={{textAlign:"center"}}>Error Demo</h1>
            <div className="error-main-div">
                <div className="error-button-div">
                    <button onClick={displayRefError}>Create Refrence Error</button><br />
                    <button onClick={displayTypeError}>Create Type Error</button><br />
                    <button onClick={displayFetchError}>Create Fetch Error</button><br />
                    <button onClick={displayCustomError}>Create Custom Error</button><br />
                </div>
                <div className="error-text-div">
                    {
                        refrenceError ?
                            <>
                                <h4>Refrence Error : Hello</h4>
                                <button onClick={() => setRefrenceError(false)}>Clear</button>
                            </> : ""
                    }
                    {
                        typeError ?
                            <>
                                <h4>Type Error : This Is Type Error</h4>
                                <button onClick={() => setTypeError(false)}>Clear</button>
                            </> : ""
                    }
                    {
                        fetchError ?
                            <>
                                <h4>Undefined: TypeError: Failed To Fetch</h4>
                                <button onClick={() => setFetchError(false)}>Clear</button>
                            </> : ""
                    }
                    {
                        customError ?
                            <>
                                <h4>Undefined: Error: Another Thing Went Wrong — Something Happened On /Error-Demo!</h4>
                                <button onClick={() => setCustomError(false)}>Clear</button>
                            </> : ""
                    }
                    {
                        refrenceError === false && typeError === false && fetchError === false && customError === false ? <h4>Select Error To Preview</h4> : ""
                    }
                </div>
            </div>
        </>
    );
}

export default Errors;


/* {
                    refrenceerror === true ?
                        <>
                            <h4>refrence error : hello</h4>
                            <button onClick={() => setrefrenceerror(false)}>clear</button>
                        </> :
                        typeerror === true ?
                            <>
                                <h4>type error : this is type error</h4>
                                <button onClick={() => settypeerror(false)}>clear</button>
                            </> :
                            <h4>select error to preview</h4>
                } */