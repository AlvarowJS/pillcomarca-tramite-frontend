import React, { useEffect, useState } from 'react'
import bdAdmin from '../../../api/bdAdmin'

export const useEntitie = () => {
    const [entities, setEntities] = useState([])
    const [dependencies, setDependencies] = useState([])
    useEffect(() => {
        bdAdmin.get('/entities')
            .then(res => {
                setEntities(res.data)
            })
            .catch(err => {
                console.error("Error fetching entities:", err)
            })
    }, [])

    const getDependencies = (dni) => {
        bdAdmin.get(`/dependencySearch?search=${dni}`)
            .then(res => {
                setDependencies(res.data.dependencies)
            })
            .catch(err => {
                console.error("Error fetching dependencies:", err)
                setDependencies([])
                return []
            })
    }
    const createEntity = (data) => {
    }

    return {
        entities,
        createEntity,
        getDependencies,
        dependencies
    }
}
