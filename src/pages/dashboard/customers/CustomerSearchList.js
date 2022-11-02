import React from 'react';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Link } from '@umijs/max';

const CustomerSearchList = (props: IProps) => {
    const items = get(props, 'items', []);

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 0.2,
            renderCell: ({row}: GridRenderCellParams) => (
                <Link to={`/client/${row.CustomerId}`}>{row.name}</Link>
            ),
        },
    ]
}


export default CustomerSearchList;