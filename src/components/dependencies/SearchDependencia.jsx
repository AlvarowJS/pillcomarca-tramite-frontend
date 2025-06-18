import React from 'react'
import Select from 'react-select'
const SearchDependencia = ({ search, setSearch, entity, setEntity, entitiesOptions }) => {  
  return (
    <div className='d-flex gap-2'>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar dependencia"
        className="border px-2 rounded w-50"
      />
      <Select
        id="search"
        value={entity}
        onChange={setEntity}
        options={entitiesOptions}
        isSearchable={true}
        placeholder="No especifica"
        className='w-50'
      />
    </div>
  )
}

export default SearchDependencia