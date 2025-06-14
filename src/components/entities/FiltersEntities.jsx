import React from 'react'
import { Card } from 'reactstrap'

const FiltersEntities = ({ search, setSearch }) => {

    return (
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar entidad..."
            className="border p-2 rounded w-100"
        />

    )
}

export default FiltersEntities