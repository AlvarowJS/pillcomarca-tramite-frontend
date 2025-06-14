import React, { useEffect, useState } from 'react'
import bdAdmin from '../../../api/bdAdmin'
import { getAuthHeaders } from '../../auth/auth'
const URL = '/entities'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import entitiesDefault from '../../constants/entitiesDefaults';
const MySwal = withReactContent(Swal);
export const useEntitie = () => {
    const [entities, setEntities] = useState([])
    const [dependencies, setDependencies] = useState([])
    const [search, setSearch] = useState("");
    const [filteredEntities, setFilteredEntities] = useState([]);
    const [typesEntities, setTypesEntities] = useState()
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        bdAdmin.get(URL)
            .then(res => {
                setEntities(res.data);
                setFilteredEntities(res.data);
            })
            .catch(err => {
                console.error("Error fetching entities:", err)
            })


    }, [refresh])

    useEffect(() => {
        bdAdmin.get('/entity-types', getAuthHeaders())
            .then(res => {
                setTypesEntities(res.data)
            })
            .catch(err => console.log(err))

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

    const createEntity = (data, reset, toggle) => {
        bdAdmin.post(URL, data, getAuthHeaders())
            .then(res => {
                reset(entitiesDefault);
                toggle();
                setRefresh(!refresh);
                MySwal.fire("Entidad creada", "", "success");

            })
            .catch(err => {
                const errors = err.response?.data?.errors;
                if (errors?.ruc) {
                    MySwal.fire("Error", "RUC ya registrado", "error");
                } else {
                    MySwal.fire("Error", "Ocurrió un error", "error");
                }
                console.error(errors);
            })
    }

    useEffect(() => {
        if (!search) {
            setFilteredEntities(entities);
        } else {
            const filtered = entities.filter(entity =>
                entity.description?.toLowerCase().includes(search.toLowerCase()) ||
                entity.description?.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredEntities(filtered);
        }
    }, [search, entities]);

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
            reset(entitiesDefault);
            toggle();
            setRefresh(!refresh);
            MySwal.fire("Entidad actualizado", "", "success");
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
        updateEntity,
        setSearch,
        search,
        filteredEntities,
        typesEntities
    }
}
