import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate = useNavigate();
    return (
        <>
            <div className={"contact-main-div"}>
                <h1>Sector: communities</h1>
                <div className="contact-inner-div">
                    <div className="contact-div-text">
                        <p>Anne Rempel DVM<br />Aurore_Schaefer@yahoo.com<br />1-360-471-5042 x305</p>
                    </div>
                    <div className="contact-div-text">
                        <p>Candice Price<br />Matteo96@yahoo.com<br />591-865-5800 x80610</p>
                    </div>
                    <div className="contact-div-text">
                        <p>Sophia Rohan<br />Velda_Ondricka13@hotmail.com<br />207-949-7308 x52443</p>
                    </div>
                    <div className="contact-div-text">
                        <p>Nicole Gerlach<br />Lenny.Rohan41@hotmail.com<br />486-484-3256 x31990 </p>
                    </div>
                </div>
                <button onClick={() => navigate("/")}>Home Page</button>
            </div>
        </>
    );
}

export default Contact;