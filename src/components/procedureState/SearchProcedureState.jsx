import React from 'react'

const SearchProcedureState = ({ search, setSearch }) => {
    return (
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="BUscar estado de tramite..."
            className="border p-2 rounded w-100"
        />
    )
}

export default SearchProcedureState