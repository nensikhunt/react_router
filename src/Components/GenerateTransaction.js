import { useState } from "react";

function GenerateTransaction() {
    const [submitPurchese, setSubmitPurchese] = useState(false);
    const [count, setCount] = useState(0);
    const purchesed = () => {
        setSubmitPurchese(true);
    }
    const price = 413.00;
    return (
        <>
            <h3>Generic Plastic Bacon</h3>
            <h4>$413.00</h4>
            <p><i>Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles</i></p>
            <div className="price-main-div">
                <div className="price-inner-div1">
                    <button onClick={() => setCount(count + 1)}>+</button>
                    {
                        count < 0 ? setCount(0) : <span>{count}</span>
                    }
                    <button onClick={() => setCount(count - 1)}>-</button><br />
                </div>
                <div className="price-inner-div2">
                    <span>${count * price}</span><br />
                </div>
            </div>
            {
                submitPurchese ?
                    <h4>Purchase Has Been Submitted</h4> :
                    <button onClick={purchesed}>Submit Purchease</button>
            }
        </>
    );
}

export default GenerateTransaction;