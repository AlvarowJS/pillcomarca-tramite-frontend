import React, { useEffect, useState } from 'react'
import bdAdmin from '../../../api/bdAdmin'
import { getAuthHeaders } from '../../auth/auth'
const URL = '/process-states'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import processStateDefault from '../../constants/processStateDefault';
const MySwal = withReactContent(Swal);

export const useProcessState = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("");
    const [filtereds, setFiltereds] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        bdAdmin.get(URL, getAuthHeaders())
            .then(res => {
                setData(res.data);
                setFiltereds(res.data);
            })
            .catch(err => {
                console.error("Error fetching entities:", err)
            })
    }, [refresh])

    useEffect(() => {
        if (!search) {
            setFiltereds(data);
        } else {
            const filtered = data.filter(process =>
                process.condition?.toLowerCase().includes(search.toLowerCase())
            );
            setFiltereds(filtered);
        }
    }, [search, data]);

    const createProcessState = (data, reset, toggle) => {
        bdAdmin.post(URL, data, getAuthHeaders())
            .then(res => {
                reset(processStateDefault);
                toggle();
                setRefresh(!refresh);
                MySwal.fire("Proceso de estado creada", "", "success");

            })
            .catch(err => {
                MySwal.fire("Error", "Ocurrió un error", "error");
                console.error(errors);
            })
    }

    const getProcessStateId = (id, reset, toogleActualizacion) => {
        bdAdmin.get(`${URL}/${id}`, getAuthHeaders())
            .then(res => {
                reset(res.data)
                toogleActualizacion()
            })
            .catch(err => console.log(err))
    }
    const updateProcessState = async (id, data, reset, toggle) => {
        try {
            await bdAdmin.put(`${URL}/${id}`, data, getAuthHeaders());
            reset(processStateDefault);
            toggle();
            setRefresh(!refresh);
            MySwal.fire("Estado de tramite actualizado", "", "success");
        } catch {
            MySwal.fire("Error", "Contacte con soporte", "error");
        }
    };
    return {
        data,
        createProcessState,
        getProcessStateId,
        updateProcessState,
        setSearch,
        search,
        filtereds,
    }
}
