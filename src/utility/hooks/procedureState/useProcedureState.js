import React, { useEffect, useState } from 'react'
import bdAdmin from '../../../api/bdAdmin'
import { getAuthHeaders } from '../../auth/auth'
const URL = '/procedure-states'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import procedureStateDefault from '../../constants/procedureStateDefault';
const MySwal = withReactContent(Swal);
export const useProcedureState = () => {
    const [procedureStates, setProcedureStates] = useState([])
    const [search, setSearch] = useState("");
    const [filtereds, setFiltereds] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        bdAdmin.get(URL, getAuthHeaders())
            .then(res => {
                setProcedureStates(res.data);
                setFiltereds(res.data);
            })
            .catch(err => {
                console.error("Error fetching entities:", err)
            })
    }, [refresh])

    useEffect(() => {
        if (!search) {
            setFiltereds(procedureStates);
        } else {
            const filtered = procedureStates.filter(procedure =>
                procedure.state?.toLowerCase().includes(search.toLowerCase())
            );
            setFiltereds(filtered);
        }
    }, [search, procedureStates]);

    const createProcedureState = (data, reset, toggle) => {
        bdAdmin.post(URL, data, getAuthHeaders())
            .then(res => {
                reset(procedureStateDefault);
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

    const getProcedureStateId = (id, reset, toogleActualizacion) => {
        bdAdmin.get(`${URL}/${id}`, getAuthHeaders())
            .then(res => {
                reset(res.data)
                toogleActualizacion()
            })
            .catch(err => console.log(err))
    }
    const updateProcedureState = async (id, data, reset, toggle) => {
        try {
            await bdAdmin.put(`${URL}/${id}`, data, getAuthHeaders());
            reset(procedureStateDefault);
            toggle();
            setRefresh(!refresh);
            MySwal.fire("Estado de tramite actualizado", "", "success");
        } catch {
            MySwal.fire("Error", "Contacte con soporte", "error");
        }
    };

    return {
        procedureStates,
        createProcedureState,
        getProcedureStateId,
        updateProcedureState,
        setSearch,
        search,
        filtereds,
    }
}
