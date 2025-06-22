import DataTable from 'react-data-table-component'
import { Edit, Trash, UserCheck } from 'react-feather'


const TablaUsers = ({
  data, loading, totalRows, handlePerRowsChange, handlePageChange, getUserTablaId, getAsignmentTablaId
}) => {
  const columns = [
    {
      name: 'Nombres',
      selector: row => row.firstName,
      sortable: true,
      cell: row => {
        return (
          <div>
            {row?.firstName}
          </div>
        )
      }
    },
    {
      name: 'Apellidos',
      selector: row => row.lastName,
      sortable: true,
      cell: row => {
        return (
          <div>
            {row?.lastName}
          </div>
        )
      }
    },
    {
      name: 'DNI',
      selector: row => row.dni,
      sortable: true,
      cell: row => {
        return (
          <div>
            {row?.dni}
          </div>
        )
      }
    },
    {
      name: 'Celular',
      selector: row => row.phone,
      sortable: true,
      cell: row => {
        return (
          <div>
            {row?.phone}
          </div>
        )
      }
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
      cell: row => {
        return (
          <div>
            {row?.email}
          </div>
        )
      }
    },
    {
      name: 'Dirección',
      selector: row => row.direction,
      sortable: true,
      cell: row => {
        return (
          <div>
            {row?.direction}
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
          <div className='d-flex flex-column my-1'>
            <button className='btn btn-outline-warning btn-sm'
              onClick={() => getUserTablaId(row?.id)}
            >
              Actualizar
              <Edit size={10} />
            </button>
            <button className='btn btn-outline-success btn-sm'
              onClick={() => getAsignmentTablaId(row?.id)}
            >
              Asignar
              <UserCheck size={10} />
            </button>
            <button className='btn btn-outline-dark btn-sm'
              onClick={() => getUserTablaId(row?.id)}
            >
              Eliminar
              <Trash size={10} />
            </button>
          </div>
        )
      }
    }
  ];
  return (
    <DataTable
      // title="Users"
      columns={columns}
      data={data}
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
    />
  )
}

export default TablaUsers