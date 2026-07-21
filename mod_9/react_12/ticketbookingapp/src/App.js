import React, { useState } from "react";

import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (

        <div style={{padding:"20px"}}>

            <h1>Ticket Booking Application</h1>

            {

                isLoggedIn ?

                <UserPage />

                :

                <GuestPage />

            }

            <br/>

            {

                isLoggedIn ?

                <button onClick={() => setIsLoggedIn(false)}>

                    Logout

                </button>

                :

                <button onClick={() => setIsLoggedIn(true)}>

                    Login

                </button>

            }

        </div>

    );

}

export default App;