import React, { useState, useEffect } from "react";

const Client = (props) => {
  const [companyName, setCompanyName] = useState("");
  const [productType, setProductType] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        process.env.REACT_APP_SERVER_URL +
          `/businessUsers/${props.setCurrentUser}`
      );
      const parsedRes = await response.json();

      try {
        // If the request was successful...
        if (response.ok) {
          console.log("Server response", parsedRes);
          setCompanyName(parsedRes.companyName);
          setProducts(parsedRes.products);
          // If the request was unsuccessful...
        } else {
          throw new Error(parsedRes.message);
        }
      } catch (err) {
        alert(err.message);
      }
    };

    fetchUserData();
  }, [props.setCurrentUser]);


  // Function to update the value of an input
  const updateData = (event) => {
    switch (event.target.name) {
      case "productType":
        setProductType(event.target.value);
        break;
      case "productName":
        setProductName(event.target.value);
        break;
      case "productDescription":
        setProductDescription(event.target.value);
        break;
        case "productImage":
        setProductImage(event.target.value);
        break;
      default:
        break;
    }
  };

  const submitProduct = async (event) => {
    event.preventDefault();
    const newProduct = {
      productType: productType,
      productName: productName,
      productDescription: productDescription,
      productImage: productImage
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + `/products`,
      settings
    );
    const parsedRes = await response.json();

    try {
      if (response.ok) {
        const settings = {
          method: "PATCH",
          body: JSON.stringify({ id: parsedRes.id }),
          headers: {
            "Content-Type": "application/json",
          },
        };

        const secondResponse = await fetch(
          process.env.REACT_APP_SERVER_URL +
            `/businessUsers/${props.setCurrentUser}/products`,
          settings
        );
        const parsedSecondRes = await secondResponse.json();

        if (secondResponse.ok) {
          setProducts(parsedSecondRes.products);
          setProductType("");
          setProductName("");
          setProductDescription("");
          setProductImage("")
        } else {
          throw new Error(parsedSecondRes.message);
        }

        // If first request was unsuccessful...
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div>Client {companyName}</div>
      <h1>Add a Product to your list!</h1>
      <div className="form">
        <form onSubmit={submitProduct}>
          <div>
            <label style={{ paddingRight: "5px" }}>Product Type</label>
            <input
              name="productType"
              onChange={updateData}
              value={productType}
            />
          </div>
          <div>
            <label style={{ paddingRight: "11px" }}>Product Name</label>
            <input
              name="productName"
              onChange={updateData}
              value={productName}
            />
          </div>
          <div>
            <label style={{ paddingRight: "11px" }}>Product Description</label>
            <input
              name="productDescription"
              onChange={updateData}
              value={productDescription}
            />
          </div>
          <div>
            <label>Upload a Product Image</label>
            <input
              type="file"
              name="productImage"
              onChange={updateData}
              value={productImage}
            />
          </div>
          <button>Add product</button>
        </form>
      </div>
      <div>
        <h2>Current Products</h2>
       
                  <img src={productImage} alt=""/> 
               
        
      </div>
    </>
  );
};

export default Client;

