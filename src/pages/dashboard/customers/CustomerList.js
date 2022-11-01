import React, {useEffect, useMemo} from 'react';
import {Box, Typography} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid'
import {receipts} from "../receipts/Receipts";
import moment from 'moment'

const CustomerList = ({setSelectedLink, link}) => {

    useEffect(() => {
        setSelectedLink(link);
    }, []);

    const columns = useMemo(() => [
        {field:'number', headerName: 'Number', width:70},
        {field:'name', headerName: 'Customer Name', width:170},
        {field:'date', headerName: 'Date', width:170},
        {field:'amount', headerName: 'Amount', width:170},
        {field:'receipt', headerName: 'Receipt', width:170},
        ], [])

    return (
        <div>
            <Box
            sx={{ height:400,width:'100%'}}>
                <Typography variant="h3" component="h3">Customers</Typography>
                <DataGrid
                columns={columns} rows={receipts}/>




            </Box>

        </div>
    );
};

export default CustomerList;