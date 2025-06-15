import React, { useEffect, useState } from 'react'
import bdAdmin from '../../../api/bdAdmin'
import { getAuthHeaders } from '../../auth/auth'
const URL = '/provided'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import providedDefault from '../../constants/providedsDefault';

const MySwal = withReactContent(Swal);

export const useProvideds = () => {
    const [provideds, setProvideds] = useState([])
    const [search, setSearch] = useState("");
    const [filtereds, setFiltereds] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        bdAdmin.get(URL, getAuthHeaders())
            .then(res => {
                setProvideds(res.data);
                setFiltereds(res.data);
            })
            .catch(err => {
                console.error("Error fetching entities:", err)
            })
    }, [refresh])


    useEffect(() => {
        if (!search) {
            setFiltereds(provideds);
        } else {
            const filtered = provideds.filter(documenttype =>
                documenttype.provided?.toLowerCase().includes(search.toLowerCase())
            );
            setFiltereds(filtered);
        }
    }, [search, provideds]);

    const createProvided = (data, reset, toggle) => {
        bdAdmin.post(URL, data, getAuthHeaders())
            .then(res => {
                reset(providedDefault);
                toggle();
                setRefresh(!refresh);
                MySwal.fire("Proveido creado", "", "success");

            })
            .catch(err => {
                MySwal.fire("Error", "Ocurrió un error", "error");
                console.error(errors);
            })
    }

    const getProvidedId = (id, reset, toogleActualizacion) => {
        bdAdmin.get(`${URL}/${id}`, getAuthHeaders())
            .then(res => {
                reset(res.data)
                toogleActualizacion()
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }
    const updateProvided = async (id, data, reset, toggle) => {
        try {
            await bdAdmin.put(`${URL}/${id}`, data, getAuthHeaders());
            reset(providedDefault);
            toggle();
            setRefresh(!refresh);
            MySwal.fire("Proveido actualizado", "", "success");
        } catch {
            MySwal.fire("Error", "Contacte con soporte", "error");
        }
    };
    return {
        provideds,
        createProvided,
        getProvidedId,
        updateProvided,
        setSearch,
        search,
        filtereds        
    }
}
