import React from 'react'
import ReactDOM from 'react-dom'
import DataTable from 'react-data-table-component'
import Card from '@material-ui/core/Card'
import SortIcon from '@material-ui/icons/ArrowDownward'
import Movies from './movies'

const columns = [
  {
    id: 1,
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
    reorder: true
  },
  {
    id: 2,
    name: "Director",
    selector: (row) => row.director,
    sortable: true,
    reorder: true
  },
  {
    id: 3,
    name: "Runtime (m)",
    selector: (row) => row.runtime,
    sortable: true,
    right: true,
    reorder: true
  }
]

export default () => (
  <div>
    <Card>
      <DataTable
        title="Movies"
        columns={columns}
        data={Movies}
        defaultSortFieldId={1}
        sortIcon={<SortIcon />}
        pagination
        selectableRows
      />
    </Card>
  </div>
)
