import React, { useEffect, useState } from 'react'
import bdAdmin from '../../../api/bdAdmin'
import { getAuthHeaders } from '../../auth/auth'
const URL = '/entities'
export const useEntitie = () => {
    const [entities, setEntities] = useState([])
    const [dependencies, setDependencies] = useState([])
    useEffect(() => {
        bdAdmin.get(URL)
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
        bdAdmin.post(URL, data, getAuthHeaders())
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.error(err)
            })
    }

    const getEntityById = (id, reset, toogleActualizacion) => {
        bdAdmin.get(`${URL}/${id}`, getAuthHeaders())
            .then(res => {
                reset(res.data)
                toogleActualizacion()
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }
    const updateEntity = async (id, data, reset, toggle) => {
        try {
            await bdAdmin.put(`${URL}/${id}`, data, getAuthHeaders());
            reset(clientesDefault);
            toggle();
            setRefresh(!refresh);
            MySwal.fire("Entity actualizado", "", "success");
        } catch {
            MySwal.fire("Error", "Contacte con soporte", "error");
        }
    };


    return {
        entities,
        createEntity,
        getDependencies,
        dependencies,
        getEntityById,
        updateEntity
    }
}
