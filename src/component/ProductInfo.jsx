import React from "react";
import '../css/ImageTableComponent.css'
function ProductInfo({product_name,price,image_url,quantity}) {
    return (
        <div className="image-table-container">
            <img src={image_url} alt="Description of the image" className="table-image"/>
            <table>
                <tr>
                    <td>{product_name}</td>
                </tr>
                <tr>
                    <td>{price}</td>
                </tr>
                <tr>
                    <td>{quantity}</td>
                </tr>
            </table>
        </div>
    )
}

export default ProductInfo;