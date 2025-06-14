import React from 'react'
import DataTable from 'react-data-table-component'

const TablaEntities = ({
    entities
}) => {
    const columns = [
        
    ]
    return (
        <div>
            <DataTable
                data={entities}
            />
        </div>
    )
}

export default TablaEntities