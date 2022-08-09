import React, {useState, useEffect} from "react";

const Client = (props) => {
  const [firstName, setFirstName] = useState("");
    
  useEffect(() => {
    const fetchUserData = async () => {
    

      const response = await fetch(
        process.env.REACT_APP_SERVER_URL + `/customerUsers/${props.currentUserId}`
      );
      const parsedRes = await response.json();

      try {
        // If the request was successful...
        if (response.ok) {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentUserId] );


    return(
        <div>Client {firstName}</div>
    );
};

export default Client;