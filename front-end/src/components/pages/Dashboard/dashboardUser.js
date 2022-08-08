import React, { useState, useEffect } from 'react';

export const Dashboard = (props) => {
    const [firstName, setFirstName] = useState("");

    useEffect(() => {
        const fetchUserData = async () => { //Welcome Giorgio render App
            // Make a GET request to the "/users/:id" endpoint in our server...
            // ... and then handle the response from the server

            const settings = {
                // headers: {
                //     "Authorization": "Bearer " + props.token //split the string
                // }
                credentials: "include"
            };

            const response = await fetch(process.env.REACT_APP_SERVER_URL + `/users/${props.currentUserId}`, settings);
            const parsedRes = await response.json();



            try {
                // If the request was successful...
                if (response.ok) {
                    console.log("Server response", parsedRes);
                    setFirstName(parsedRes.firstName);

                    // If the request was unsuccessful...
                } else {
                    throw new Error(parsedRes.message);
                }
            } catch (err) {
                alert(err.message);
            }
        };

        fetchUserData();
    }, [props.currentUserId]);

    return (
        <div>
            <h2 id="greeting">Welcome {firstName}!</h2>
        </div>

    );
};
