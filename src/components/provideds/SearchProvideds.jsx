import React from 'react'

const SearchProvideds = ({ search, setSearch }) => {
    return (
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar tipo de documento..."
            className="border p-2 rounded w-100"
        />
    )
}

export default SearchProvideds