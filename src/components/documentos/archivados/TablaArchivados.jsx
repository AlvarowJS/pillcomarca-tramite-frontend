import DataTable from 'react-data-table-component'
import { Edit, Trash, UserCheck } from 'react-feather'

const TablaArchivados = ({
    data, loading, totalRows, handlePerRowsChange, handlePageChange
}) => {
    const columns = [
        {
            name: (
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' }}>
                    Expediente
                </div>
            ),
            selector: row => row.records,
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {row?.records}
                    </div>
                )
            }
        },
        {
            name: 'Registro',
            selector: row => row.registry,
            sortable: true,
            width: '110px',
            cell: row => {
                return (
                    <div>
                        <p>{row?.registry}</p>
                        <p className='fw-bold'>Referencia:</p>
                        <p>{row?.reference}</p>

                    </div>
                )
            }
        },
        {
            name: (
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' }}>
                    Dependencia Emisor
                </div>
            ),
            selector: row => row.Dependency,
            sortable: true,
            width: '150px',
            cell: row => {
                return (
                    <div>
                        <p>{row?.Dependency}</p>
                        <p className='fw-bold'>Entidad:</p>
                        <p>{row?.entityDependency}</p>
                    </div>
                )
            }
        },
        {
            name: (
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' }}>
                    Dependencia Receptor
                </div>
            ),
            selector: row => row.Destination,
            sortable: true,
            width: '150px',
            cell: row => {
                return (
                    <div>
                        <p>{row?.Destination}</p>
                        <p className='fw-bold'>Entidad:</p>
                        <p>{row?.entityDestination}</p>
                    </div>
                )
            }
        },
        {
            name: (
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' }}>
                    Tipo de Documento
                </div>
            ),
            selector: row => row.code,
            sortable: true,
            width: '150px',
            cell: row => {
                return (
                    <p>
                        {row?.code}
                    </p>
                )
            }
        },
        {
            name: (
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' }}>
                    Asunto
                </div>
            ),
            selector: row => row.affair,
            sortable: true,
            width: '180px',
            cell: row => {
                return (
                    <p>
                        {row?.affair}
                    </p>
                )
            }
        },
        {
            name: (
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' }}>
                    Proveido de atención
                </div>
            ),
            selector: row => row.state,
            sortable: true,
            width: '120px',
            cell: row => {
                return (
                    <div>
                        {row?.state}
                    </div>
                )
            }
        },
        {
            name: (
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' }}>
                    Folios
                </div>
            ),
            selector: row => row.folio,
            width: '90px',
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {row?.folio}
                    </div>
                )
            }
        },
        {
            name: (
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' }}>
                    Prioridad
                </div>
            ),
            selector: row => row.folio,
            sortable: true,
            width: '110px',
            cell: row => {
                return (
                    <div>
                        {row?.folio}
                    </div>
                )
            }
        },
        {
            name: (
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' }}>
                    Observaciones
                </div>
            ),
            selector: row => row.observations,
            sortable: true,
            width: '150px',
            cell: row => {
                return (
                    <div>
                        {row?.observations}
                    </div>
                )
            }
        },
        {
            name: (
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' }}>
                    Fecha de envio
                </div>
            ),
            selector: row => row.shipping_date,
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {row?.shipping_date}
                    </div>
                )
            }
        },
        {
            name: (
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' }}>
                    Fecha de recepción
                </div>
            ),
            selector: row => row.reception_date,
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {row?.reception_date}
                    </div>
                )
            }
        },
        {
            name: (
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' }}>
                    Trámite
                </div>
            ),
            selector: row => row.state,
            sortable: true,
            cell: row => {
                return (
                    <div>
                        <span className='badge badge-pill badge-danger'>
                            {row?.state}
                        </span>
                    </div>
                )
            }
        },
        {
            name: (
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' }}>
                    Fecha de Trámite
                </div>
            ),
            selector: row => row.procedure_date,
            sortable: true,
            cell: row => {
                return (
                    <div>
                        {row?.procedure_date}
                    </div>
                )
            }
        },
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

export default TablaArchivados