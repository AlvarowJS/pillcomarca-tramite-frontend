import React from 'react'
import TablaDependencia from '../../../components/dependencies/TablaDependencia'
import SearchDependencia from '../../../components/dependencies/SearchDependencia'
import { useEntitie } from '../../../utility/hooks/entities/useEntitie'

const Dependencia = () => {

  return (
    <div>
      Dependencias
      <SearchDependencia />
      <TablaDependencia />

    </div>
  )
}

export default Dependencia