import React from 'react'

const SearchDocumentOrigin = ({ search, setSearch }) => {
    return (
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar origen de documento..."
            className="border p-2 rounded w-100"
        />
    )
}

export default SearchDocumentOrigin