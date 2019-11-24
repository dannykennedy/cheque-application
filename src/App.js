import React from "react";
import Cheque from "./components/Cheque/";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Cheque
                amount={100}
                amountInWords={"One hundred dollars"}
                payeeName={"Dan Kennedy"}
                date={new Date()}
                drawer={"Mr Boss Man"}
            />
        </div>
    );
}

export default App;
