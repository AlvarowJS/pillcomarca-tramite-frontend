import DataTable from 'react-data-table-component'
import { Edit, Trash } from 'react-feather'
import { useCharges } from '../../utility/hooks/charge/useCharges';

const ListAsignmentUser = ({ charges }) => {

    const columns = [
        {
            name: 'Entidad',
            selector: row => row.entity,
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {row?.entity}
                    </div>
                )
            }
        },
        {
            name: 'Dependencia',
            selector: row => row.dependency,
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {row?.dependency}
                    </div>
                )
            }
        },
        {
            name: 'Cargo',
            selector: row => row.charge,
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {row?.charge}
                    </div>
                )
            }
        },
        {
            name: 'Sustento',
            selector: row => row.detail,
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {row?.detail}
                    </div>
                )
            }
        },
        {
            name: 'Fecha Inicial',
            selector: row => row.startDate,
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {row?.startDate}
                    </div>
                )
            }
        },
        {
            name: 'Fecha Final',
            selector: row => row.finalDate,
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {row?.finalDate}
                    </div>
                )
            }
        },
        {
            name: 'Estado',
            selector: row => row.charge_state_id,
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {row?.charge_state_id}
                    </div>
                )
            }
        },
        {
            name: 'Rol',
            selector: row => row.role,
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {row?.role}
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
                        // onClick={() => getUserTablaId(row?.id)}
                        >
                            Editar
                            <Edit size={10} />
                        </button>

                        <button className='btn btn-outline-dark btn-sm'
                        // onClick={() => getUserTablaId(row?.id)}
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
            noHeader
            pagination
            className='react-datatable'
            columns={columns}
            data={charges}

        />
    )
}

export default ListAsignmentUser