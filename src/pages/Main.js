import { dbQuery } from '../data/dbQuery';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export const Main = () => {
    const tasks = dbQuery({
        action: 'get', 
        type: 'task'
    });
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'description', headerName: 'Description', width: 130 },
    ];
    return (
        <>
            <DataGrid
                rows={tasks}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { 
                            page: 0, 
                            pageSize: 5 
                        },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{
                    m: 2,
                    boxShadow: 4,
                    width: "50%",
                    left: "25%"
                }}
            />
        </>
    );
}