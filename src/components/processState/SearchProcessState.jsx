import React from 'react'

const SearchProcessState = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Buscar estado de procedimiento..."
      className="border p-2 rounded w-100"
    />
  )
}

export default SearchProcessState