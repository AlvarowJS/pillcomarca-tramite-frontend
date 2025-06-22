import React from 'react'

const FiltersEntities = ({ search, setSearch }) => {

    return (
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar entidad..."
            className="border p-1 rounded w-100"
        />

    )
}

export default FiltersEntities