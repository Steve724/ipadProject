import React from "react";
import '../css/ImageTableComponent.css'
import {Table, TableContainer,Paper,TableRow,TableCell,TableBody} from "@mui/material";
function ProductInfo({product_name,price,image_url,quantity}) {
    return (
                        <TableRow>
                            <TableCell><img src={image_url} alt="Description of the image" className="table-image"/></TableCell>
                            <TableCell>{product_name}</TableCell>
                            <TableCell align="right">{price}</TableCell>
                            <TableCell align="right">{quantity}</TableCell>
                        </TableRow>
    )
}

export default ProductInfo;