import React from 'react'
import DataTable from 'react-data-table-component'
import { Edit } from 'react-feather'

const TablaEntities = ({
    entities, getEntityByIdTable
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
            name: 'Entidad',
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
            name: 'Dirección',
            minWidth: '25px',
            selector: row => row?.direction,
            cell: row => {
                return (
                    <div>
                        {row?.direction}
                    </div>
                )
            }
        },
        {
            sortable: true,
            name: 'RUC',
            minWidth: '25px',
            maxWidth: '200px',
            selector: row => row?.ruc
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
                            onClick={() => getEntityByIdTable(row?.id)}
                        >
                            <Edit />
                        </button>
                    </div>
                )
            }
        }

    ]
    return (
        <div>
            <DataTable
                noHeader
                pagination
                className='react-datatable'
                columns={columns}
                data={entities}

            />
        </div>
    )
}

export default TablaEntities