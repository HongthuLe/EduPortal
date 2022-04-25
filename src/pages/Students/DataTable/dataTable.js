import React from 'react'
import DataTableWrapper from './dataTable.style'
import { DataGrid } from '@mui/x-data-grid'
import { studentColumns, studentRows } from '../../../assets/data/Students/students'

export default function dataTable() {

  const actionColumn = [
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">
              <i className='bx bxs-show'></i>
              View
            </div>
            <div className="deleteButton">
              <i className='bx bxs-trash' ></i>
              Delete
            </div>
          </div>
        )
      }
    }
  ]

  return (
    <DataTableWrapper>
      <DataGrid sx={{border: '2px solid #FF7D00'}}
        rows={studentRows}
        columns={studentColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </DataTableWrapper>
  )
}
