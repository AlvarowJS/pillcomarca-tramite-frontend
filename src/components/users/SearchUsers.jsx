import React from 'react'

const SearchUsers = ({
    setSearch, search, searchUser
}) => {
    return (
        <div className='d-flex gap-1'>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar tipo de documento..."
                className="border px-2 rounded w-100"
            />
            <button onClick={searchUser} className='btn btn-info'>
                Buscar
            </button>
        </div>
    )
}

export default SearchUsers