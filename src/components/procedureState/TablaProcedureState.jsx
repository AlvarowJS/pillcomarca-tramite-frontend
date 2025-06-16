import DataTable from 'react-data-table-component'
import { Edit } from 'react-feather'


const TablaProcedureState = ({
    procedures, getProcedureGetIdTable
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
            selector: row => row?.id
        },
        {
            sortable: true,
            name: 'Tipo de proveido',
            minWidth: '25px',
            selector: row => row?.state,
            cell: row => {
                return (
                    <div>
                        {row?.state}
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
                            onClick={() => getProcedureGetIdTable(row?.id)}
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
            data={procedures}

        />
    )
}

export default TablaProcedureState