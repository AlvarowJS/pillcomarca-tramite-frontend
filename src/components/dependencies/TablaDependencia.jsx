import DataTable from 'react-data-table-component'
import { Edit } from 'react-feather'

const TablaDependencia = ({
  data, getDependencieIdTabla
}) => {
  const columns = [
    {
      sortable: true,
      name: (
        <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' }}>
          Código
        </div>
      ),
      minWidth: '35px',
      maxWidth: '100px',
      selector: row => row?.code
    },
    {
      sortable: true,
      name: 'Unidad Organica',
      minWidth: '25px',
      selector: row => row?.description,
      cell: row => {
        return (
          <div>
            {row?.description}
          </div>
        )
      }
    },
    {
      sortable: true,
      name: 'Dependencia',
      minWidth: '25px',
      selector: row => row?.dependency,
      cell: row => {
        return (
          <div>
            {row?.dependency}
          </div>
        )
      }
    },
    {
      sortable: true,
      name: 'Responsable',
      minWidth: '25px',
      selector: row => row?.fullName,
      cell: row => {
        return (
          <div>
            {row?.fullName}
          </div>
        )
      }
    },
    {
      name: 'Acciones',
      sortable: true,
      allowOverflow: true,
      minWidth: '200px',
      maxWidth: '400px',
      cell: row => {
        return (
          <div className='d-flex gap-1 my-1'>

            <button className='btn btn-warning'
              onClick={() => getDependencieIdTabla(row?.id)}
            >
              <Edit />
            </button>
          </div>
        )
      }
    }

  ]
  return (
    <DataTable
      noHeader
      pagination
      className='react-datatable'
      columns={columns}
      data={data}

    />
  )
}

export default TablaDependencia