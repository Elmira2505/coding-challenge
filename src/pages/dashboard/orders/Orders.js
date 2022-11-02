import React from 'react'
import {useEffect, useMemo} from "react";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {receipts} from "../receipts/Receipts";
import {Link, useNavigate} from "react-router-dom";



const OrderList = ({setSelectedLink, link}) => {
    useEffect(() => {
        setSelectedLink(link);
    }, []);

const router = useNavigate()
    console.log(router)


    return (
        <TableContainer component={Paper} sx={{ minWidth: 550, maxHeight: '800px' }}>
            <h1>Orders</h1>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Customer ID</TableCell>
                        <TableCell align="center">Customer Name</TableCell>
                        <TableCell align="center">Date of last purchase</TableCell>
                        <TableCell align="center">Items</TableCell>
                        <TableCell align="center">Amount</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {receipts.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row.CustomerId}</TableCell>
                            <TableCell align="center">
                                {receipts.map((row) => <div>
                                    <Link to={"/customers/"+row.CustomerId}>
                                        {row.CustomerName}
                                    </Link>
                                </div>


                                )}
                            </TableCell>
                            <TableCell align="center">{row.Date}</TableCell>
                            <TableCell align="center">
                                items
                            </TableCell>
                            <TableCell align="center">{row.Total}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default OrderList;