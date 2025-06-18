import React, { useEffect, useState } from 'react'
import bdAdmin from '../../../api/bdAdmin'
import { getAuthHeaders } from '../../auth/auth'
const URL = '/dependencies'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
export const useDependencie = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState("");
    const [filtereds, setFiltereds] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [entity, setEntity] = useState(5)

    useEffect(() => {        
        bdAdmin.get(`${URL}?entity=${entity.value ?? entity }`, getAuthHeaders())
            .then(res => {
                setData(res.data);
                setFiltereds(res.data);
            })
            .catch(err => {
                console.error("Error fetching entities:", err)
            })
    }, [refresh, entity])

    useEffect(() => {
        if (!search) {
            setFiltereds(data);
        } else {
            const filtered = data.filter(process =>
                process.description?.toLowerCase().includes(search.toLowerCase())
            );
            setFiltereds(filtered);
        }
    }, [search, data]);

    const createDependencie = (data, reset, toggle) => {
        bdAdmin.post(URL, data, getAuthHeaders())
            .then(res => {
                reset(processStateDefault);
                toggle();
                setRefresh(!refresh);
                MySwal.fire("Dependencia creada", "", "success");

            })
            .catch(err => {
                MySwal.fire("Error", "Ocurrió un error", "error");
                console.error(errors);
            })
    }

    const getDependencieId = (id, reset, toogleActualizacion) => {
        bdAdmin.get(`${URL}/${id}`, getAuthHeaders())
            .then(res => {
                reset(res.data)
                toogleActualizacion()
            })
            .catch(err => console.log(err))
    }
    const updateDependencie = async (id, data, reset, toggle) => {
        try {
            await bdAdmin.put(`${URL}/${id}`, data, getAuthHeaders());
            reset(depend);
            toggle();
            setRefresh(!refresh);
            MySwal.fire("Dependencia actualizada", "", "success");
        } catch {
            MySwal.fire("Error", "Contacte con soporte", "error");
        }
    };

    return {
        data,
        createDependencie,
        getDependencieId,
        updateDependencie,
        setSearch,
        search,
        entity,
        setEntity,
        filtereds,
    }
}
