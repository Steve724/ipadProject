import React from "react";
import ProductInfo from "./ProductInfo";
import {Paper,TableContainer,TableHead,TableBody,TableRow,TableCell,Table} from "@mui/material";

function Invoice({id,created_at,total_price,items,status,full_name,address1,address2,city,state,zipcode}) {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{backgroundColor:"aliceblue"}}>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Created_at</TableCell>
                            <TableCell align="right">Total_price</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Full_name</TableCell>
                            <TableCell align="right">Address1</TableCell>
                            <TableCell align="right">Address2</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">State</TableCell>
                            <TableCell align="right">Zipcode</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }} style={{backgroundColor:"aliceblue"}}
                        >
                            <TableCell component="th" scope="row">
                                {id}
                            </TableCell>
                            <TableCell align="right">{created_at}</TableCell>
                            <TableCell align="right">{total_price}</TableCell>
                            <TableCell align="right">{status}</TableCell>
                            <TableCell align="right">{full_name}</TableCell>
                            <TableCell align="right">{address1}</TableCell>
                            <TableCell align="right">{address2}</TableCell>
                            <TableCell align="right">{city}</TableCell>
                            <TableCell align="right">{state}</TableCell>
                            <TableCell align="right">{zipcode}</TableCell>
                        </TableRow>
                        {
                            items.map((item) => (
                                <ProductInfo price={item.price} product_name={item.product_name}
                                             image_url={item.image_url} quantity={item.quantity}/>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Invoice;