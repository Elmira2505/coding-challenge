import React from 'react'
import {useEffect, useMemo} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {receipts} from "../receipts/Receipts";
import {useNavigate} from "react-router-dom";
import CustomerCards from "./CustomerCards";



const CustomerList = ({setSelectedLink, link}) => {
    useEffect(() => {
        setSelectedLink(link);
    }, []);

    return (
        <div>
        <TableContainer component={Paper} sx={{ minWidth: 550, maxHeight: '300px' }}>
            <Table  aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Order ID</TableCell>
                        <TableCell align="center">Amount</TableCell>
                        <TableCell align="center">Total items</TableCell>
                        <TableCell align="center">Items</TableCell>
                        <TableCell align="center">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {receipts.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row.OrderId}</TableCell>
                            <TableCell align="center">{row.Total}</TableCell>
                            <TableCell align="center">Кол-во предметов</TableCell>
                            <TableCell align="center">Какие предметы</TableCell>
                            <TableCell align="center">{row.Date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
};

export default CustomerList;