import React from 'react'
import TablaEntities from '../../../components/entities/TablaEntities'
import FiltersEntities from '../../../components/entities/FiltersEntities'
import { useEntitie } from '../../../utility/hooks/entities/useEntitie'

const Entidad = () => {

    const { entities } = useEntitie()
    return (
        <div>
            <FiltersEntities />
            <TablaEntities
                entities={entities}
            />
        </div>
    )
}

export default Entidad