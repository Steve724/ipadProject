import React from "react";
import ProductInfo from "./ProductInfo";
function Invoice({id,created_at,total_price,items,status,full_name,address1,address2,city,state,zipcode}) {
    return (
        <div>
            <table className="table text-bg-secondary p-3">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Created_at</th>
                    <th scope="col">Total_price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Full_name</th>
                    <th scope="col">Address1</th>
                    <th scope="col">Address2</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Zipcode</th>
                </tr>
                <tr>
                    <td>{id}</td>
                    <td>{created_at}</td>
                    <td>{total_price}</td>
                    <td>{status}</td>
                    <td>{full_name}</td>
                    <td>{address1}</td>
                    <td>{address2}</td>
                    <td>{city}</td>
                    <td>{state}</td>
                    <td>{zipcode}</td>
                </tr>
            </table>
            <ul>
                {
                    items.map(item => (
                        <li style={{listStyleType:"none"}} key={item.id}>
                            <ProductInfo price={item.price} product_name={item.product_name}
                                         image_url={item.image_url} quantity={item.quantity}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Invoice;