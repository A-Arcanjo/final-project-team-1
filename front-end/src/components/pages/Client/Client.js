import React, { useState, useEffect } from "react";

const Client = (props) => {
    const [companyName, setCompanyName] = useState("");const [band, setBand] = useState("");
    const [productType, setProductType] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => { 
            const response = await fetch(process.env.REACT_APP_SERVER_URL + `/businessUsers/${props.currentUserId}`);
            const parsedRes = await response.json();

            try {
                // If the request was successful...
                if (response.ok) {
                    console.log("Server response", parsedRes);
                    setCompanyName(parsedRes.companyName);
                    setProducts(parsedRes.products)
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
      default:
        break;
    }
  };

  const submitProduct = () => {
    
  }

    return(
        <>
        <div>Client {companyName}</div>
        <h1>Add a üroduct to your list!</h1>
      <div className="form">
        <form onSubmit={submitProduct}>
          <div>
            <label style={{ paddingRight: "5px" }}>Product Type</label>
            <input name="productType" onChange={updateData} value={productType} />
          </div>
          <div>
            <label style={{ paddingRight: "11px" }}>Product Name</label>
            <input name="productName" onChange={updateData} value={productName} />
          </div>
          <div>
            <label style={{ paddingRight: "11px" }}>Product Description</label>
            <input name="productDescription" onChange={updateData} value={productDescription} />
          </div>
          <button>Add product</button>
        </form>
      </div>
      <div>
        <h2>Current Products</h2>
        <ul>
          {products.map((product) => {
            return (
              <div className="container-list" id={product._id}>
                {/* album._id to use in deleteOneAlbum */}
                <li className="album-list" key={product._id}>
                  {product.productType} 
                  {product.productName} 
                  {product.productDescription}
                </li>
                {/* <span onClick={deleteOneAlbum} className="closing-button">
                  X
                </span> */}
              </div>
            );
          })}
        </ul>
      </div>
    
      </>
    );
};

export default Client;